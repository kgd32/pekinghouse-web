export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/lemon-milk-bold.otf","fonts/lemon-milk-medium.otf","fonts/lemon-milk-pro-ftr-regular.otf"]),
	mimeTypes: {".png":"image/png",".otf":"font/otf"},
	_: {
		entry: {"file":"_app/immutable/start-9bd328ca.js","imports":["_app/immutable/start-9bd328ca.js","_app/immutable/chunks/index-c3f4f0c1.js","_app/immutable/chunks/singletons-fe318e24.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/artists",
				pattern: /^\/artists\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/releases",
				pattern: /^\/releases\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/releases/[slug]",
				pattern: /^\/releases\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
