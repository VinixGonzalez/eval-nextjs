import { fireEvent, render, screen } from "@testing-library/react";
import { TodasImagensAlbum } from "@/app/(private)/meus-imoveis/[id]/components/TodasImagensAlbum";

describe("TodasImagensAlbum", () => {
  it("test_clicking_button_opens_modal", () => {
    render(<TodasImagensAlbum />);
    const button = screen.getByText("Todas");
    fireEvent.click(button);
    const modal = screen.getByText("Albúm de Fotos");
    expect(modal).toBeTruthy();
  });
});
