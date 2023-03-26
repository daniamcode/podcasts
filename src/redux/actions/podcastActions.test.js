import {
    loadPodcasts
} from "./podcastActions"
import { waitFor } from '@testing-library/react'

jest.mock("../configureStore")

describe('Podcast actions', () => {
    describe('loadPodcasts', () => {
        let dispatch

        beforeEach(() => {
            dispatch = jest.fn();
            global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () =>
                Promise.resolve({
                    feed: {
                    entry: [{ title: 'Podcast 1' }, { title: 'Podcast 2' }],
                    },
                }),
            }))
        })    
        
        afterEach(() => {
            dispatch.mockClear();
            global.fetch.mockRestore()
        })

        test('dispatches', () => {
            loadPodcasts()(dispatch);
            expect(dispatch).toHaveBeenCalled()
        })

        test('returns expected value', async() => {
            await waitFor(() => 
                loadPodcasts()(dispatch)
            )
            expect((dispatch).mock.calls.length).toBe(2)
            expect((dispatch).mock.calls[0][0].type).toEqual('LOAD_PODCASTS')
            expect((dispatch).mock.calls[0][0].payload).toEqual({isLoading: true})

            expect(fetch).toHaveBeenCalledTimes(1);
            expect((dispatch).mock.calls[1][0].type).toEqual('LOAD_PODCASTS')
            expect((dispatch).mock.calls[1][0].payload).toEqual({
                isLoading: false,
                isError: false,
                timestamp: expect.any(Number),
                response: [{ title: 'Podcast 1' }, { title: 'Podcast 2' }]
            })
        })
    })
})