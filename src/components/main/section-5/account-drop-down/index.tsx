import "./index.css";
import { motion } from "framer-motion";
import { FADE_IN_UP_VARIANT } from "@/components/common/animations/motion-container";

interface Props {
  summary: string;
  accountList: {
    name: string;
    bank: string;
    account: string;
  }[];
}

export const AccountDropDown = ({ summary, accountList }: Props) => {
  return (
    <motion.details
      variants={FADE_IN_UP_VARIANT}
      name="accounts"
      className="rounded-md group border-1 border-primary-300 bg-primary-50"
    >
      <summary className="p-16 font-semibold cursor-pointer select-none text-15 text-primary-500 flex-between">
        {summary}
        <svg className="transition-transform size-24 group-open:rotate-180">
          <use href="assets/icons/chevron-down.svg"></use>
        </svg>
      </summary>
      <ul>
        {accountList.map((accountData) => {
          return <AccountItem key={accountData.name} {...accountData} />;
        })}
      </ul>
    </motion.details>
  );
};

const AccountItem = ({ name, bank, account }: Props["accountList"][number]) => {
  const clipboardTemplate = `${bank} ${account} ${name}`;

  return (
    <li className="px-16 py-20 border-t flex-between border-primary-300">
      <div className="space-y-4 font-medium">
        <span className="block text-14 text-primary-500">{bank}</span>
        <p className="text-15">
          {name} {account}
        </p>
      </div>
      <button
        type="button"
        className="gap-5 px-12 py-5 font-semibold rounded-full cursor-pointer select-none text-14 flex-center text-primary-500 bg-primary-300/60"
        onClick={() => navigator.clipboard.writeText(clipboardTemplate)}
      >
        <svg width={13} height={13} className="font-light size-13">
          <use href="assets/icons/clip.svg"></use>
        </svg>
        복사
      </button>
    </li>
  );
};
