import { cn } from "@/lib/utils";

interface RememberIdProps {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

function RememberId({ checked, setChecked }: RememberIdProps) {
  return (
    <div className="space-y-2">
      <span className="sr-only" aria-live="polite">
        아이디 저장 {checked ? "켜짐" : "꺼짐"}
      </span>
      <div className="flex items-center gap-[14px] pc:gap-3">
        <input
          type="checkbox"
          name="remember_id"
          id="remember_id"
          className={cn(
            "relative h-5 w-5 appearance-none rounded-[4px] border border-gray-300 bg-white transition-colors",
            "checked:border-tertiary",
            "after:absolute after:inset-[3px] after:scale-0 after:rounded-[2px] after:bg-black after:transition-transform checked:after:scale-100"
          )}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label
          className="cursor-pointer select-none text-body-sm text-default pc:text-body-md"
          htmlFor="remember_id"
        >
          아이디 저장
        </label>
      </div>
    </div>
  );
}
export default RememberId;
