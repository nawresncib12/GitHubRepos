import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./Card";

describe("Card",()=>{
    it("to show modal on click on card", async () => {
        const repo = {
          id: 1,
          created_at: "",
          description: "",
          language: "",
          name: "",
          owner: { login: "", avatar_url: "", html_url: "" },
          updated_at: "",
          html_url: "",
          visibility: "",
          watchers_count: 2,
          stargazers_count: 2,
          forks_count: 2,
        };
        render(<Card repo={repo} />);
        const card = screen.getByTestId("card");
        fireEvent.click(card);
        expect(document.getElementById("modal")).toBeInTheDocument();
      });
      
})