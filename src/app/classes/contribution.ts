export interface Contribution {
  id: string;
  title: string;
  url: string;
  text: string;
  votes: number;
  user_id: string;
  parent_id: number;
  created_at: string;
  updated_at: string;
  total_Comments: number;
  comment_type: string;
  username: string;
}