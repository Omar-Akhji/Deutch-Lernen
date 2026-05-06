"use client";

import { useState } from "react";
import { CardBody } from "./CardBody";
import { CardModal } from "./CardModal";

interface CardWithModalProps {
  href: string;
  title: string;
  subtitle?: string | undefined;
  description?: string | undefined;
  category?: string | undefined;
  badge?: string | undefined;
  gradient: string;
  icon?: string | undefined;
  stats?: Array<{ label: string; value: string }> | undefined;
  variant?: "default" | "large" | undefined;
  previewTitles?: string[] | undefined;
}

const EMPTY_PREVIEW_TITLES: string[] = [];

export const CardWithModal = ({
  href,
  previewTitles = EMPTY_PREVIEW_TITLES,
  ...bodyProps
}: CardWithModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Deutsch Lernen - High-Performance React Architecture

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpenModal}
        className="h-full w-full cursor-pointer border-none bg-transparent p-0 text-left"
        aria-label={`${bodyProps.title} öffnen`}
      >
        <CardBody {...bodyProps} />
      </button>

      <CardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={bodyProps.title}
        subtitle={bodyProps.category}
        description={bodyProps.description}
        href={href}
        previewTitles={previewTitles}
      />
    </>
  );
};
