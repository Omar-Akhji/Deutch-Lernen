import type { ExamLevel, RedemittelData } from "../model/types";
import { examLevelB1, redemittelB1 } from "./data-b1";
import { examLevelB2, redemittelB2 } from "./data-b2";

export const examLevels: ExamLevel[] = [examLevelB1, examLevelB2];

// Deutsch Lernen - High-Performance React Architecture

export const redemittelData: RedemittelData = { b1: redemittelB1, b2: redemittelB2 };
