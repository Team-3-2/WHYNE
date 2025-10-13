interface RememberIdProps {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

function RememberId({ checked, setChecked }: RememberIdProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor="remember_id"
        className="inline-flex cursor-pointer select-none items-center gap-2"
      >
        <input
          id="remember_id"
          name="remember_id"
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          aria-describedby="remember_id_help"
          className="h-5 w-5 rounded border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        />
        <span>아이디 저장</span>
      </label>

      <span className="sr-only" aria-live="polite">
        아이디 저장 {checked ? "켜짐" : "꺼짐"}
      </span>
    </div>
  );
}
export default RememberId;
