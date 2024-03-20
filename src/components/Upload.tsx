const Upload = () => {
    // Function to handle uplaod

    // Function to handle file upload
    const handleUpload = (event) => {
        event.preventDefault();
        const file = event.target.elements.filename.files[0];
        if (file) {
            alert(`File "${file.name}" has been successfully uploaded.`);
            // Here you can add code to send the file to the server if needed
        }
    }


    // Function to handle download
    const handleDownload = () => {
        // Create a blob with the text content
        const textContent = '**Smart Ring User Documentation**\n' +
            '\n' +
            'Welcome to the Smart Ring user documentation. This guide will walk you through the features and functionalities of your Smart Ring, enabling you to harness its full potential in enhancing your daily activities.\n' +
            '\n' +
            '**Table of Contents:**\n' +
            '1. Introduction\n' +
            '2. Getting Started\n' +
            '3. Controlling Spotify\n' +
            '4. Managing TikTok\n' +
            '5. Navigating Presentations\n' +
            '6. Reading eBooks\n' +
            '7. Troubleshooting\n' +
            '8. Contact Support\n' +
            '\n' +
            '**1. Introduction:**\n' +
            'The Smart Ring is a cutting-edge wearable device designed to streamline your digital interactions seamlessly. With its intuitive controls and sleek design, the Smart Ring empowers you to control various applications and devices with simple gestures.\n' +
            '\n' +
            '**2. Getting Started:**\n' +
            '- To begin using your Smart Ring, ensure it is fully charged by placing it on the charging dock provided.\n' +
            '- Download and install the Smart Ring companion app on your smartphone from the respective app store.\n' +
            '- Follow the on-screen instructions to pair your Smart Ring with your smartphone via Bluetooth.\n' +
            '- Once paired, you\'re ready to explore the features of your Smart Ring.\n' +
            '\n' +
            '**3. Controlling Spotify:**\n' +
            '- With your Smart Ring, you can control your Spotify music playback effortlessly.\n' +
            '- Simply swipe left or right on the surface of the ring to switch between tracks.\n' +
            '- To adjust the volume, rotate the ring clockwise or counterclockwise.\n' +
            '- Enjoy your favorite tunes with ease, directly from your Smart Ring.\n' +
            '\n' +
            '**4. Managing TikTok:**\n' +
            '- Elevate your TikTok experience with the Smart Ring\'s intuitive controls.\n' +
            '- Tap the surface of the ring to start or pause TikTok videos.\n' +
            '- Swipe up or down to scroll through your TikTok feed.\n' +
            '- Engage with your favorite content seamlessly, right from your fingertips.\n' +
            '\n' +
            '**5. Navigating Presentations:**\n' +
            '- Impress your audience and take control of your presentations with the Smart Ring.\n' +
            '- Use gestures to navigate through slides effortlessly.\n' +
            '- Swipe left or right to move forward or backward in your presentation.\n' +
            '- Ensure a smooth and professional presentation every time, with the Smart Ring as your reliable companion.\n' +
            '\n' +
            '**6. Reading eBooks:**\n' +
            '- Dive into a world of literature with the Smart Ring\'s eBook reading capabilities.\n' +
            '- Turn pages with a simple swipe gesture, allowing for a comfortable and immersive reading experience.\n' +
            '- Adjust font size and brightness directly from the Smart Ring app for personalized reading preferences.\n' +
            '- Immerse yourself in your favorite books anytime, anywhere, with the convenience of your Smart Ring.\n' +
            '\n' +
            '**7. Troubleshooting:**\n' +
            '- If you encounter any issues with your Smart Ring, ensure it is properly charged and connected to your smartphone via Bluetooth.\n' +
            '- Restart the Smart Ring by removing it from your finger and placing it back on.\n' +
            '- For further assistance, refer to the troubleshooting section of the Smart Ring app or contact customer support.\n' +
            '\n' +
            '**8. Contact Support:**\n' +
            '- For any inquiries or technical support regarding your Smart Ring, please reach out to our customer support team.\n' +
            '- Contact details can be found in the Smart Ring app or on our official website.\n' +
            '\n' +
            'Congratulations on your purchase of the Smart Ring! We hope this documentation enables you to make the most out of your Smart Ring experience. Enjoy the convenience and innovation it brings to your daily life.';
        const blob = new Blob([textContent], { type: 'text/plain' });

        // Create a temporary URL for the blob
        const url = window.URL.createObjectURL(blob);

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = url;
        link.download = 'ring.txt'; // Set the file name here
        document.body.appendChild(link);

        // Trigger the click event to download the file
        link.click();

        // Clean up
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
    };

    return (
        <div className="container pt-md-5">
            <div className="row">
                <div className="col-md-6 d-flex">
                    <div className="card w-100">
                        <div className="card-body">
                            <h5 className="card-title">Upload File</h5>
                            <form onSubmit={handleUpload}>
                                <div className="form-group">
                                    <input type="file" className="form-control-file" id="myFile" name="filename"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Upload</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                    <div className="card w-100">
                        <div className="card-body">
                            <h5 className="card-title">Download User Guide</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Click the button to download our documentation.</h6>
                            {/* Call handleDownload function when the button is clicked */}
                            <button type="button" className="btn btn-success" onClick={handleDownload}>Download</button>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 mb-5" style={{width: '50rem'}}>
                    <div className="card mx-auto">
                        <div className="card-body">
                            <div className="mt-3">
                                <h1 className="card-title">User Guide Preview:</h1>
                                <p>Welcome to the Smart Ring user documentation. This guide will walk you through the features and functionalities of your Smart Ring, enabling you to harness its full potential in enhancing your daily activities.</p>
                                <h6>Table of Contents:</h6>
                                <ol>
                                    <li>Introduction</li>
                                    <li>Getting Started</li>
                                    <li>Controlling Spotify</li>
                                    <li>Managing TikTok</li>
                                    <li>Navigating Presentations</li>
                                    <li>Reading eBooks</li>
                                    <li>Troubleshooting</li>
                                    <li>Contact Support</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
