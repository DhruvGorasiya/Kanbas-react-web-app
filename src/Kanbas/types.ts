export interface Assignment {
    _id: string;
    title: string;
    description: string;
    course?: string;
    dueDate: string;
    totalPoints: number;
    untilDate: string;
    availableDate: string;
    modules: string;
    points: number;
  }