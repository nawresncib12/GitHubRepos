import axios from "axios";
class ReposService {
  /**
   * get public repositories of specified github user
   * @param {string} user
   */
  public static async getReposByUser(user: string) {
    return await axios
      .get(`https://api.github.com/users/${user}/repos`, {})
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
        return false;
      })
      .catch(() => {
        return false;
      });
  }
}
export default ReposService;
