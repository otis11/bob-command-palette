import "../themes";
import "../global.css";
import { SearchResult } from "../search/search-result";
import type { SearchResultGroup } from "../search/search-result-group";
import { getSearchGroupsWithPermission } from "../search/search-result-groups";

let searchResultGroups: SearchResultGroup[] = [];
let selectedSearchResultIndex = 0;
let filteredSearchElements: HTMLElement[] = [];
let lastMousePosition = {
	x: 0,
	y: 0,
};

const searchInput = document.getElementById("search") as HTMLInputElement;
const resultsContainer = document.getElementById("results") as HTMLElement;

function filterSearchResults() {
	const searchString = searchInput?.value;
	// TODO improve search, Levenshtein distance algorithm? what is good?
	for (const child of Array.from(resultsContainer.children)) {
		if (
			SearchResult.instanceFromId(
				child.getAttribute("data-instance-id") || "",
			)?.searchText?.includes(searchString.toLowerCase())
		) {
			child.classList.remove("hidden");
		} else {
			child.classList.add("hidden");
		}
	}
	filteredSearchElements = Array.from(
		resultsContainer.querySelectorAll<HTMLElement>("li:not(.hidden)"),
	);
	removeHighlightSelectedIndex();
	selectedSearchResultIndex = 0;
	showSelectedIndex();
}

function renderSearchResults() {
	if (!resultsContainer) {
		console.error("no results container found");
		return;
	}

	resultsContainer.innerHTML = "";

	for (const group of searchResultGroups) {
		resultsContainer.append(...group.asHtmlElement());
	}

	filteredSearchElements = Array.from(
		resultsContainer.querySelectorAll<HTMLElement>("li:not(.hidden)"),
	);
	showSelectedIndex();
}

function onKeyUp(event: KeyboardEvent) {
	if (event.key === "ArrowDown") {
		removeHighlightSelectedIndex();
		if (selectedSearchResultIndex === filteredSearchElements.length - 1) {
			selectedSearchResultIndex = 0;
		} else {
			selectedSearchResultIndex += 1;
		}
		showSelectedIndex(true);
	}
	if (event.key === "ArrowUp") {
		removeHighlightSelectedIndex();
		if (
			selectedSearchResultIndex === 0 ||
			selectedSearchResultIndex === -1
		) {
			selectedSearchResultIndex = filteredSearchElements.length - 1;
		} else {
			selectedSearchResultIndex -= 1;
		}
		showSelectedIndex(true);
	}
	if (event.key === "Enter") {
		const target = filteredSearchElements[selectedSearchResultIndex];
		const searchResult = SearchResult.instanceFromId(
			target?.getAttribute("data-instance-id") || "",
		);
		console.log(searchResult, event, target);
	}
}

function onKeyDown(event: KeyboardEvent) {
	if (event.key === "ArrowDown" || event.key === "ArrowUp") {
		event.preventDefault();
	}
}

function showSelectedIndex(scrollTo = false) {
	const el = filteredSearchElements[selectedSearchResultIndex];
	if (!el) {
		return;
	}
	el.setAttribute("aria-selected", "");
	if (scrollTo) {
		el.scrollIntoView({
			behavior: "smooth",
		});
	}
}

function removeHighlightSelectedIndex() {
	filteredSearchElements[selectedSearchResultIndex]?.removeAttribute(
		"aria-selected",
	);
}

searchInput?.addEventListener("input", filterSearchResults);
searchInput?.addEventListener("keydown", onKeyDown);
searchInput?.addEventListener("keyup", onKeyUp);
searchInput?.focus();

window.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		window.close();
	}
});

window.addEventListener("mouseover", (event) => {
	// ignore mouseover if mouse stood still
	if (
		lastMousePosition.x === event.clientX &&
		lastMousePosition.y === event.clientY
	) {
		return;
	}

	lastMousePosition = {
		x: event.clientX,
		y: event.clientY,
	};

	const target = getLiFromEvent(event);
	if (target) {
		removeHighlightSelectedIndex();
		const index = filteredSearchElements.indexOf(target);
		selectedSearchResultIndex = index;
		showSelectedIndex();
	}
});

function getLiFromEvent(event: Event) {
	if (!(event.target instanceof HTMLElement)) {
		return null;
	}
	if (event.target.tagName === "LI") {
		return event.target;
	}
	return event.target.closest("li");
}

(async () => {
	searchResultGroups = await getSearchGroupsWithPermission();
	const promises = searchResultGroups.map((group) => group.loadResults());
	await Promise.all(promises);
	renderSearchResults();
})();
