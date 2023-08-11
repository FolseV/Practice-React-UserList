import React, { Dispatch, SetStateAction } from "react";

interface SuccesProps {
  invited: Number[];
  setSuccess: Dispatch<SetStateAction<boolean>>;
}

export const Success = ({ invited, setSuccess }: SuccesProps) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {invited.length} пользователям отправлено приглашение.</p>
      <button onClick={() => setSuccess(false)} className="send-invite-btn">
        Назад
      </button>
    </div>
  );
};
