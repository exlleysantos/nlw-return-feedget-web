import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedBackSucessStep } from "./Steps/FeedbackSucessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problem",
    image: {
      source: bugImageUrl,
      alt: "bug image",
    },
  },
  IDEA: {
    title: "Idea",
    image: {
      source: ideaImageUrl,
      alt: "lamp image",
    },
  },
  OTHER: {
    title: "Other",
    image: {
      source: thoughtImageUrl,
      alt: "mind cloud image",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedBackSucessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => {
                setFeedbackSent(true);
              }}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com carinho por{" "}
        <a className="underline underline-offset-2" href="http://github.com/exlleysantos">
          Exlley
        </a>
      </footer>
    </div>
  );
}
