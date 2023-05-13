// a command line tool to create a new svelte component

import { log } from 'console';
import fs from 'fs';

const componentName = process.argv[2];

if (!componentName) {
    console.log('Please enter a component name');
    process.exit()
}

const componentCapitalized = componentName.charAt(0).toUpperCase() + componentName.slice(1);

const componentPath = `src/lib/components/${componentCapitalized}/${componentCapitalized}.svelte`;
const stylePath = `src/lib/components/${componentCapitalized}/${componentName.toLowerCase()}.scss`;

const componentContent = `<script lang="ts">
</script>

<div class="${componentName.toLowerCase()}">
	
</div>

<style lang="scss">
	@import "./${componentName.toLowerCase()}.scss";
</style>
`;

const styleContent = `@import '$lib/scss/variables.scss';

.${componentName.toLowerCase()} {

}
`;

fs.mkdirSync(`src/lib/components/${componentCapitalized}`);

fs.writeFile(componentPath, componentContent, (err) => {
    if (err) throw err;
    console.log('Component created successfully');
});

fs.writeFile(stylePath, styleContent, (err) => {
    if (err) throw err;
    console.log('Style created successfully');
})