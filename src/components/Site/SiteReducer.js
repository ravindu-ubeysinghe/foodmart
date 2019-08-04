const initialState = {
    id: null,
    name: '',
    description: '',
    global_meta_title: '',
    global_meta_description: null,
    owner_id: null,
    created_at: '',
    updated_at: '',
    path: '',
    domain: '',
    theme_colour: '',
    logo_url: '',
    pages: [],
    components: [],
    loading: true,
    server_error: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SAVE_SITE_DATA':
            return {
                ...state,
                ...action.payload ?.site,
                pages: action.payload ?.pages,
                components: action.payload ?.components,
            }
        case 'SET_SERVER_ERROR':
            return {
                ...state,
                server_error: action.payload,
            }
        case 'LOADING_SITE_DATA':
            return {
                ...state,
                loading: true,
            }
        case 'LOADED_SITE_DATA':
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}