import { WINE_FIELDSET } from "../../_constants/wine-fieldset";
import { useUpdateQuery } from "../../_utils/use-update-query";

const RatingOption = () => {
  const { setQuery, searchParams } = useUpdateQuery();

  const selectedRating = searchParams.get("rating") ?? "전체";

  // 평점 선택 핸들러
  const handleRatingClick = (rating: string) => {
    if (selectedRating === rating) return;

    setQuery((params) => {
      if (rating === "전체") params.delete("rating");
      else params.set("rating", rating);
    });
  };

  return (
    <fieldset className="mt-6">
      <legend className="text-heading-xs mb-3 block text-body-lg text-default">
        평점
      </legend>

      {WINE_FIELDSET.map((fieldset) => (
        <div className="flex items-center gap-3" key={fieldset.id}>
          <input
            type="radio"
            name="rating"
            id={fieldset.id}
            className="h-5 w-5 border border-gray-300 bg-white"
            checked={selectedRating === fieldset.id}
            onChange={() => handleRatingClick(fieldset.id)}
          />
          <label
            className="select-none text-body-md text-default"
            htmlFor={fieldset.id}
          >
            {fieldset.label}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default RatingOption;
