/**
 *
 * @param file
 * @returns Base 64 File
 */

export const getBase64File = async (file: any) =>
    new Promise((resolve, reject) => {
        try {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = (error) => {
                reject(error);
            };
        } catch (error) {
            reject(error);
        }
    });
