
import VideoCall from '@/components/UI/VideoCall/videoCall';
import React from 'react';

const VideoCalling = ({
   searchParams,
}: {
   searchParams: { videoCallingId: string };
}) => {
   const videoCallingId = searchParams.videoCallingId;

   return <VideoCall videoCallingId={videoCallingId} />;
};

export default VideoCalling;