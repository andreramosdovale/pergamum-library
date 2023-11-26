import { describe, expect, it } from "vitest";
import queryService from "../../services/query";

describe("Service/Query", () => {
  it("Api books returns values", async () => {
    const data = await queryService.books("LIVRE", "harry+potter");

    expect(data.count > 0);
  });

  it("Api books returns no values", async () => {
    const data = await queryService.books("LIVRE", "");

    expect((data.count = 0));
  });
});
