import OwnerModel from "./OwnerModel";

export default interface RepoModel {
  created_at: string;
  default_branch: string;
  allow_forking: boolean;
  description?: string;
  disabled: boolean;
  full_name: string;
  id: number;
  language: string;
  license: string;
  name: string;
  open_issues: number;
  owner: OwnerModel;
  pushed_at: string;
  size: number;
  updated_at: string;
  html_url: string;
  visibility: string;
  watchers_count: number;
  stargazers_count: number;
  forks_count: number;
}
