import { isArrayLike } from "../src";
import { describe, expect, test } from "@jest/globals";

describe("my-lib:isArrayLike", () => {
    test("isArrayLike():true", () => {
        expect(
            isArrayLike()
        ).toBe(false);
    })
})