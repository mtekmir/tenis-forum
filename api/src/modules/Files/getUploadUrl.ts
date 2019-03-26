import { S3 } from 'aws-sdk';
import { v1 } from 'uuid';
import { QueryResolvers } from '../../types/schema';

const s3 = new S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  signatureVersion: 'v4',
  region: 'eu-west-3',
});

export const getUploadUrl: QueryResolvers.GetUploadUrlResolver = async (
  _,
  { input: { contentType, extention } },
  { userId },
) => {
  const imageId = v1();
  const uploadKey = `${userId}/${imageId}.${extention}`;
  const uploadUrl: string = await new Promise((resolve, reject) => {
    s3.getSignedUrl(
      'putObject',
      {
        Bucket: 'tenis-forum',
        ContentType: contentType,
        Key: uploadKey,
      },
      (err, url) => {
        if (err) {
          reject(err);
        }
        resolve(url);
      },
    );
  });

  return {
    success: !!uploadUrl,
    uploadUrl,
    uploadKey,
  };
};
