export class UploadAdapter {
  constructor(loader: any, client: any) {
    this.loader = loader
    this.client = client
  }

  loader: {
    file: Promise<File>
  }
  client: any
  // ...

  // Starts the upload process.
  upload() {
    return this.loader.file.then(file => new Promise((resolve, reject) => {}))
  }

  // Aborts the upload process.
  abort() {
    // if (this.xhr) {
    //   this.xhr.abort()
    // }
  }

  // ...
}
