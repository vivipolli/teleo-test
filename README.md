# Part 1

A. To implement generating a screenshot image, we can use some libraries or some API browsers: 

[Screen Capture API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture):

**pros:** It doesn’t require any lib installation.

**cons:** Ask for a screen capture, maybe it might be a problem
****

```jsx
    async function getScreen() {
      try {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        setStream(screenStream);
      } catch (error) {
        console.error('Error capturing screen:', error);
      }
    }
```

**[react-screen-capture](https://github.com/Bunlong/react-screen-capture#react-screen-capture)**

**pros**: Easy to implement and you can select exactly what part of the screen you want to capture

**cons**: you need to install the lib, and it has a few collaborations, which can be deprecated in the future. You need to involve all the pages with the component lib. 

```jsx
import React, { useRef } from 'react';
import ScreenCapture from 'react-screen-capture';

function MyComponent() {
  const screenCaptureRef = useRef(null);

  const handleCaptureClick = () => {
    if (screenCaptureRef.current) {
      screenCaptureRef.current.captureScreenshot();
    }
  };

  const handleScreenshotTaken = (blob) => {
    // Handle the captured screenshot, e.g., save it or display it
    // Here, we'll simply log the blob URL to the console
    console.log('Screenshot blob URL:', URL.createObjectURL(blob));
  };

  return (
    <div>
      <h1>React Screen Capture Example</h1>
      <button onClick={handleCaptureClick}>Capture Screenshot</button>

      {/* The ScreenCapture component */}
      <ScreenCapture ref={screenCaptureRef} onEndCapture={handleScreenshotTaken}>
        <div>
          {/* Your content to capture goes here */}
          <p>This is the content you want to capture.</p>
        </div>
      </ScreenCapture>
    </div>
  );
}

export default MyComponent;
```

B. For the generated screenshot media, it can be saved as an image and then sent to the endpoint related to storage files, like a bucket on AWS for example. You create a name, or an ID, and generate a URL to save this image on the storage service.

# Part 2
Improvements for future releases:
- In case of an empty list, show a message related to this condition.
- Adding the date of the screenshot and maybe the time.
- Error handle in case of broken images, like a message saying that something happened when rendering the list or a generic image for broken cases.
- Put the interface on another file dedicated to types.




