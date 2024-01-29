import {
    describe,
    it,
    expect
} from "vitest"

import {
    getPasswordStrength
} from "./functions"

describe("getPasswordStrength Unit Test Suites", () => {
    it("should return something", () => {
        expect(getPasswordStrength("toto")).toBeDefined()
    })
    
    it("should return a string", () => {
        expect(typeof getPasswordStrength("toto")).toBe("string")
    })
    
    it("should return 'too-weak'", () => {
        expect(getPasswordStrength("toto")).toBe("weak")
    })
})

