import { S3 } from 'aws-sdk'
import { v1 } from 'uuid'
import { QueryResolvers } from '../../types/schema'

const s3 = new S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  signatureVersion: 'v4',
  region: 'eu-central-1',
})

export const getUploadUrl: QueryResolvers['getUploadUrl'] = async (
  _,
  { input: { contentType, extension } },
  { userId, s3BucketUrl }
) => {
  const imageId = v1()
  const uploadKey = `${userId}/${imageId}.${extension}`
  const uploadUrl: string = await new Promise((resolve, reject) => {
    s3.getSignedUrl(
      'putObject',
      {
        Bucket: 'tenis-forum-dev',
        ContentType: contentType,
        Key: uploadKey,
      },
      (err, url) => {
        if (err) {
          reject(err)
        }
        resolve(url)
      }
    )
  })

  return {
    success: !!uploadUrl,
    uploadUrl,
    uploadKey,
    previewUrl: `${s3BucketUrl}/${uploadKey}`,
  }
}
