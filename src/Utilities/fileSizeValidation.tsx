export type FileValidationResult = {
    isValid: boolean;
    errorMessage?: string;
};

export const validateFile = async (file: File): Promise<FileValidationResult> => {
    const maxSize = 1024 * 1024;
    const maxWidth = 750;
    const maxHeight = 600;

    if (file.size > maxSize) {
        return {
            isValid: false,
            errorMessage: "File size exceeds 1MB limit.",
        };
    }

    const image = new Image();
    image.src = URL.createObjectURL(file);

    return new Promise((resolve) => {
        image.onload = () => {
            if (image.width > maxWidth || image.height > maxHeight) {
                resolve({
                    isValid: false,
                    errorMessage: `Image dimensions exceed the maximum limit of ${maxWidth}x${maxHeight} pixels.`,
                });
            } else {
                resolve({ isValid: true });
            }
        };
    });
};
