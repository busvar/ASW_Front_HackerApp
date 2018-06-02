export interface Contribution {
  id: number;
  title: string;
  url: string;
  text: string;
  votes: number;
  user_id: number;
  parent_id: number;
  created_at: string;
  updated_at: string;
  total_Comments: number;
  comment_type: string;
}