export default {
  license:
    "eyJzY29wZSI6WyJBTEwiXSwicGxhdGZvcm0iOlsiaU9TIiwiQW5kcm9pZCIsIldpbmRvd3MiXSwidmFsaWQiOiIyMDE4LTExLTE1IiwibWFqb3JWZXJzaW9uIjoiMyIsImlzQ29tbWVyY2lhbCI6ZmFsc2UsInRvbGVyYW5jZURheXMiOjMwLCJzaG93UG9wVXBBZnRlckV4cGlyeSI6dHJ1ZSwiaW9zSWRlbnRpZmllciI6WyJjb20udHR0dHR0dHR0dHR0Il0sImFuZHJvaWRJZGVudGlmaWVyIjpbImNvbS50dHR0dHR0dHR0dHQiXSwid2luZG93c0lkZW50aWZpZXIiOlsiY29tLnR0dHR0dHR0dHR0dCJdfQpSWmJNaFlkOTI3L2d4OS9HbmxJd3lEZFJ1b2NJWkl2ZnBLbFo1S0tuR01kNTAvaHFlaFgwNk82a3VGRWhUNWYyeFFLYkY4cTRDZ2N2WlA2RU5PMisreUVQUjVxUFlNN3hkNS9IOGQ1TmtUZ0VzVGwyRmFKaXhJM0U0bDJjRlBFRzZZU3ZnekhFSmF0YlI4bHR4dHJONmFmR0JLQzJMbnA5eFAvNXNRNFFybDAxM3doNWJmZWdYTXZrVU95SjN6eGw0SG9wTHNvWm10THkzQi9SUTNTaUV4dkY5cVp2MERrVUxocG1IOU8rOW8vWTJoNzgvZm9wUS8wYS9WZll0V3gzeUZsZGhoeEZhRTlrSk5vYzAza3M1MXpmOXhqRmJpZjcxOEsxUE0wNmVrMlNlNzBCT1RMcTZjU1psdXc1QkJMUXk3MmIxbHV6ZHpxVUd4TU9oMThYUHc9PQ==",
  options: {
    captureResolution: "1080p",
    pictureResolution: "1080p",
    cutout: {
      style: "rect",
      maxWidthPercent: "100%",
      maxHeightPercent: "100%",
      ratioFromSize: {
        width: 10,
        height: 15
      },
      alignment: "center",
      strokeWidth: 2,
      cornerRadius: 0,
      outerAlpha: 0.0,
      outerColor: "00000000",
      strokeColor: "00000000"
    },
    flash: {
      mode: "manual",
      alignment: "bottom_left",
      offset: {
        x: 10,
        y: 0
      }
    },
    visualFeedback: {
      style: "RECT",
      strokeColor: "FF0000",
      animationDuration: 150,
      cornerRadius: 2,
      strokeWidth: 4
    },
    beepOnResult: false,
    vibrateOnResult: false,
    blinkAnimationOnResult: true,
    cancelOnResult: false,
    document: {
      showSuccessToast: true,
      quality: 90,
      maxOutputResolution: {
        width: 1920,
        height: 1080
      },
      ratio: {
        ratios: [0.707, 1.41, 1.58, 0.633, 1.296, 0.772, 0.704],
        deviation: 0.15
      }
    }
  }
};
