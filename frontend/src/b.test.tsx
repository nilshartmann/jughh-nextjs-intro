import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import {H1} from "@/components/Heading";

test('Page', () => {
	render(<H1>huhuuhu</H1>)
	expect(screen.getByRole('heading', { level: 1, name: 'huhuuhu' })).toBeDefined()
})