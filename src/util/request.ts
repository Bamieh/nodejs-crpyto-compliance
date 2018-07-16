import { request as nativeRequest, RequestOptions } from 'https';
import { URL } from 'url'

export
function request(options: string | RequestOptions | URL) : Promise<any> {
    return new Promise(function(resolve, reject) {
      const clientRequest = nativeRequest(options, function(res) {
        const chunks:(Buffer|string)[] = [];
        res.on('data', (chunk) => chunks.push(chunk));

        res.on('end', function() {
          try {
            const parsedBody = JSON.parse(Buffer.concat(chunks as Uint8Array[]).toString());
            resolve(parsedBody);
          } catch(e) {
            reject(e);
          }
        });
      });
      clientRequest.on('error', reject);
      clientRequest.end();
  });
}