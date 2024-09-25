import { VideoTimeline } from "./VideoTimeline";

const exampleData = {
  timeline: {
    background: "#FFFFFF",
    tracks: [
      {
        clips: [
          {
            length: 2.51,
            asset: {
              type: "video",
              src: "https://shotstack-ingest-api-v1-sources.s3.ap-southeast-2.amazonaws.com/2gidb9hgcr/zzz01j8f-ec0m0-mtheb-vpazz-gr62gg/source.mp4",
              trim: 2.78,
            },
            start: 2.81,
            offset: {
              x: -0.28,
              y: 0.118,
            },
            scale: 0.438,
            position: "center",
          },
        ],
      },
      {
        clips: [
          {
            length: 20,
            asset: {
              type: "video",
              src: "https://shotstack-ingest-api-v1-sources.s3.ap-southeast-2.amazonaws.com/2gidb9hgcr/zzz01j8f-eayet-azkdn-j116f-65t8qg/source.mp4",
              trim: 0,
            },
            start: 0,
            offset: {
              x: 0.119,
              y: -0.05,
            },
            position: "center",
          },
        ],
      },
    ],
  },
  output: {
    format: "mp4",
    fps: 25,
    size: {
      width: 1024,
      height: 576,
    },
  },
};

export const Home = () => {
  return <VideoTimeline timeline={exampleData.timeline} />;
};
