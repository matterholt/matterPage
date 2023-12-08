declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
				import('astro/zod').ZodLiteral<'avif'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"2020/2020-06-10-directions/index.md": {
	id: "2020/2020-06-10-directions/index.md";
  slug: "Working the daily job.";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/2020-07-11-reactChallenge/idea.md": {
	id: "2020/2020-07-11-reactChallenge/idea.md";
  slug: "2020/2020-07-11-reactchallenge/idea";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/2020-07-15-ReactDefaultProps/index.md": {
	id: "2020/2020-07-15-ReactDefaultProps/index.md";
  slug: "If a prop is miss or maybe not needed then default props can be created";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/2020-07-22-ReactDataFetchingHowTo/index.md": {
	id: "2020/2020-07-22-ReactDataFetchingHowTo/index.md";
  slug: "Getting the data from the api into the component for the user to use";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/2020-08-11-useReducerIntro/index.md": {
	id: "2020/2020-08-11-useReducerIntro/index.md";
  slug: "Create a navigation menu with useReducer";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/2020-10-14-handcraftedReact/index.md": {
	id: "2020/2020-10-14-handcraftedReact/index.md";
  slug: "Working on the low level of react by hand crafting react elements.";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/2020-10-15-jsx/index.md": {
	id: "2020/2020-10-15-jsx/index.md";
  slug: "Taking a look at JS";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/2020-10-15-useEffect/index.md": {
	id: "2020/2020-10-15-useEffect/index.md";
  slug: "checking out useEffect and extracting logic out in to a custom hook";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/2020-10-15-useState/index.md": {
	id: "2020/2020-10-15-useState/index.md";
  slug: "State it's a big deal, The hook that controls State in React";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/2020-10-19-customComponnets/index.md": {
	id: "2020/2020-10-19-customComponnets/index.md";
  slug: "Creating component and how they get processed in babel";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/2020-10-19-stylingComponets/index.md": {
	id: "2020/2020-10-19-stylingComponets/index.md";
  slug: "add some styles to a react Component";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/2020-11-02-TicTacToeWalkThrough/index.md": {
	id: "2020/2020-11-02-TicTacToeWalkThrough/index.md";
  slug: "Concepts where contained through Kent's explanation of how to build the tic tac toe game using Hooks";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2021/2021-02-04-useReducerIntro/index.md": {
	id: "2021/2021-02-04-useReducerIntro/index.md";
  slug: "Understanding on how the useReducer API works and convention that make it powerful";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2021/2021-02-05-MenuComponent/index.md": {
	id: "2021/2021-02-05-MenuComponent/index.md";
  slug: "Explanation of the Menu Component that I built";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2021/2021-03-30-useCallback/index.md": {
	id: "2021/2021-03-30-useCallback/index.md";
  slug: "Understanding when and what the useCallback is all about";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2021/2021-04-13-softwareBuild/index.md": {
	id: "2021/2021-04-13-softwareBuild/index.md";
  slug: "building software";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022/2022-03-01-Git/index.md": {
	id: "2022/2022-03-01-Git/index.md";
  slug: "Quick run down on git";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022/2022-05-29-Digital/index.md": {
	id: "2022/2022-05-29-Digital/index.md";
  slug: "how to review what is saved on Hard drive";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022/2022-06-10-cms/index.md": {
	id: "2022/2022-06-10-cms/index.md";
  slug: "Evaluating some of the CMS out in the web.";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022/2022-07-10-dontKnowJSCh1/index.md": {
	id: "2022/2022-07-10-dontKnowJSCh1/index.md";
  slug: "Reading notes on the Chapter 1 of Book 1 You Don't Know JS yet";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022/2022-08-20-PasswordlessAuthentication/index.md": {
	id: "2022/2022-08-20-PasswordlessAuthentication/index.md";
  slug: "Allowing user to create account quickly and without worries";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022/2022-10-14-ImperativeDeclarative/index.md": {
	id: "2022/2022-10-14-ImperativeDeclarative/index.md";
  slug: "Figuring out what Imperative programming and Declarative programming";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022/2022-10-22-MakingCustomHook/index.md": {
	id: "2022/2022-10-22-MakingCustomHook/index.md";
  slug: "Thinking about how we can extract logic out of the rendering and opening up the possibility to use it other places.";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022/2022-10-22-hookflow/index.md": {
	id: "2022/2022-10-22-hookflow/index.md";
  slug: "If you are going to use a tool then it is best to learn how it works.";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022/2022-11-02-liftingState/index.md": {
	id: "2022/2022-11-02-liftingState/index.md";
  slug: "Concepts where contained through Kent's explanation of how React lifts up state";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022/2022-11-05-DomIneractions/index.md": {
	id: "2022/2022-11-05-DomIneractions/index.md";
  slug: "useRef and useEffect to get access to the DOM";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022/2022-11-05-HttpRequests/index.md": {
	id: "2022/2022-11-05-HttpRequests/index.md";
  slug: "Data helps move and create the app, Let explore how to get thing going in React";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023/ 2023-05-20-devSetting/index.md": {
	id: "2023/ 2023-05-20-devSetting/index.md";
  slug: "I have rocked the same setup since 2017. This year I was finally able to change everything up. From hardware to software that I used for daily development. Here is a  quick overview of my current development setup that I will be running this year";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023/2023-07-27-OOP/index.md": {
	id: "2023/2023-07-27-OOP/index.md";
  slug: "A quick look into the programming paradigm of Object-Oriented. Object-Oriented Programming or OOP, is a process of structuring code. The closer, we as programmers capture these program design patterns, the code-base will be more manageable and easier for future engineers to make changes.";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023/2023-08-27-microfront/index.md": {
	id: "2023/2023-08-27-microfront/index.md";
  slug: "Breaking a front end into separate app so it is easier to deploy and make change quickly, There are several way below list 5 different ways";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023/2023-10-10-globalNPMConfig/index.md": {
	id: "2023/2023-10-10-globalNPMConfig/index.md";
  slug: "Working with some global packages, changing some npm configs, ended up causing more trouble and had to revert back. These are some commands that where helpful.";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023/2023-11-26-adwareHome/index.md": {
	id: "2023/2023-11-26-adwareHome/index.md";
  slug: "detail write up about making an old laptop into and server with Ubuntu, adding the ability to remote desktop using open-SSH, Finally adding a network level ad-blocker with adGuard home";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}
