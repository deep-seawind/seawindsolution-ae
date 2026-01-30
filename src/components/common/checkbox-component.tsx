import { useState } from "react";

const CheckboxAgreement = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="flex items-start gap-3 mt-5">
            <input
                type="checkbox"
                id="agreement"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="agreement" className="text-gray-700 text-sm cursor-pointer">
                I agree that by clicking on "Submit", I am explicitly soliciting a call, Message & Mail from Seawind Solution FZ-LLC or its associates on my mobile number or email to assist me.
            </label>
        </div>
    );
};

export default CheckboxAgreement;