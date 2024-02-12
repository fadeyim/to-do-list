
import { toElement } from './../utils/toElement';

function toDoItemTemplate(todo) {
	const template = 
    `
    <aside
	class="  bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 ">
	<header class="flex justify-between items-center mb-3">
		<h2
			class="py-0.5 px-4 rounded-full text-[10px] border border-indigo-200 text-indigo-600 font-medium bg-indigo-100 w-fit   ">
			${todo.category}
		</h2>

		<p class="text-xs font-medium  ">date</p>
	</header>
	<p class="text-sm">
        ${todo.todo}
	</p>

	<footer>
		<div class="flex items-center gap-2">
			<svg
				class="fill-indigo-300 stroke-none w-4 h-4"
				viewBox="0 0 512 512"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path>
			</svg>
			<p class="text-[10px] text-indigo-700 font-semibold">${todo.status}</p>
		</div>
	</footer>
</aside>
    `
    
    ;

	return toElement(template);
}

export { toDoItemTemplate };
