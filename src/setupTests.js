import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

// src/setupTests.js
import { server } from './mocks/server.js'
globalThis.IS_REACT_ACT_ENVIRONMENT = true
// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
