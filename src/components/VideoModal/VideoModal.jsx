import * as Dialog from "@radix-ui/react-dialog";

function VideoModal({
  open,
  onOpenChange,
  videoId,
  title = "Video",
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="video-modal-overlay" />

        <Dialog.Content className="video-modal-content">
          <Dialog.Title className="video-modal-title">
            {title}
          </Dialog.Title>

          <Dialog.Close asChild>
            <button
              type="button"
              className="video-modal-close"
              aria-label="Close video"
            >
              ×
            </button>
          </Dialog.Close>

          <div className="video-modal-frame">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default VideoModal;