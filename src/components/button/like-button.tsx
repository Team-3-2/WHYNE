import Button from "./basic-button";

const LikeButton = () => {
  return (
    <div>
      <Button
        icon="LikeOffIcon"
        appearance="outline"
        aria-label="좋아요버튼"
        className="rounded-lg py-1 pl-2 pr-3 text-body-sm tablet:gap-[2px]"
      >
        24
      </Button>
    </div>
  );
};

export default LikeButton;
