
export interface Question {
    question: string;
    type: string;
    options?: { values: string }[];
    answer?: any;
  }