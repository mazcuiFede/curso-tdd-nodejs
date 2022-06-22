const authenticate = require("./authenticate")
describe("Middlewares", () => {
  describe("Authenticate", () => {
    it.skip("not now", () => {})

    it("Should have ID = 1", () => {
      const req = {
        header: jest.fn().mockReturnValue("1"),
      }
      const res = {
        sendStatus: jest.fn(),
      }
      const next = jest.fn()

      authenticate(req, res, next)

      expect(req.header.mock.calls).toEqual([["user_id"]])
      expect(res.sendStatus.mock.calls).toEqual([])
      expect(next.mock.calls).toEqual([[]])
    })

    it("Should fail if user is not number 1", () => {
      const req = {
        header: jest.fn().mockReturnValue("3"),
      }
      const res = {
        sendStatus: jest.fn(),
      }
      const next = jest.fn()

      authenticate(req, res, next)

      expect(req.header.mock.calls).toEqual([["user_id"]])
      expect(res.sendStatus.mock.calls).toEqual([[400]])
      expect(next.mock.calls).toEqual([])
    })
  })
})
