const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
        await axios.post(`http://localhost:4000/api/auth/upload-image`, formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading the image', error);
        throw error;
    }
};

export default uploadImage;