<script>
	import Accordion from "../components/Accordion.svelte";
	import AccordionGroup from "../components/AccordionGroup.svelte";
	import Button from "../components/Button.svelte";
	import Icon from "../components/Icon.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="container">
	<section class="component-container">
		<h2>Auro Button</h2>
		<h4 id="auro-button-basic">Basic</h4>
		<div class="exampleWrapper">
			<Button>
				Primary
			</Button>
			<Button variant="secondary">
				Secondary
			</Button>
			<Button variant="tertiary">
				Tertiary
			</Button>
		</div>

		<h4 id="auro-button-ondark">Ondark</h4>
		<div class="exampleWrapper--ondark">
			<Button onDark>
				Primary
			</Button>
			<Button onDark variant="secondary">
				Secondary
			</Button>
			<Button onDark variant="tertiary">
				Tertiary
			</Button>
		</div>

		<h4 id="auro-button-disabled">Disabled</h4>
		<div class="exampleWrapper">
			<Button disabled>
				Primary
			</Button>
			<Button disabled variant="secondary">
				Secondary
			</Button>
			<Button disabled variant="tertiary">
				Tertiary
			</Button>
		</div>

		<div class="exampleWrapper--ondark">
			<Button disabled onDark>
				Primary
			</Button>
			<Button disabled onDark variant="secondary">
				Secondary
			</Button>
			<Button disabled onDark variant="tertiary">
				Tertiary
			</Button>
		</div>

		<h4 id="auro-button-slim">Slim Style</h4>
		<div class="exampleWrapper">
			<Button slim>
				Primary
			</Button>
			<Button slim variant="secondary">
				Secondary
			</Button>
			<Button slim variant="tertiary">
				Tertiary
			</Button>
		</div>

		<h4 id="auro-button-slim">Icon Support</h4>
		<div class="exampleWrapper">
			<Button ariaLabel="wifi">
				Activate Wifi
				<Icon customColor category="in-flight" name="wifi" isSlot slotName="icon"></Icon>
			</Button>
			<Button variant="secondary" ariaLabel="arrow-left">
				Previous action
				<Icon customColor category="interface" name="arrow-left" isSlot slotName="icon"></Icon>
			</Button>
			<Button variant="tertiary" ariaLabel="heart-filled">
				Love this ...
				<Icon customColor category="interface" name="heart-filled" isSlot slotName="icon"></Icon>
			</Button>
			
		</div>
	</section>

	<!-- <section class="component-container">
		<h2>Auro Hyperlink</h2>
		<h4 id="auro-accordion-basic">Basic</h4>
		<div class="exampleWrapper">
		</div>
	</section> -->

	<section class="component-container">
		<h2>Auro Accordion</h2>
		<h4 id="auro-accordion-basic">Basic</h4>
		<div class="exampleWrapper">
			<Accordion>
				<span slot="trigger">This is Auro Accordion</span>
				<span>This is Auro Accordion content</span>
			</Accordion>
		</div>
	
		<h4 id="auro-accordion-emphasis">Emphasis</h4>
		<div class="exampleWrapper">
			<AccordionGroup>
				{#each Array(3) as _, index}
					<Accordion>
						<span slot="trigger">Trigger</span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<p>
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
						<p>
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						</p>
						<p>
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</Accordion>
				{/each}
			</AccordionGroup>
		</div>
	</section>
	
</section>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.component-container {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.component-container:not(:first-of-type)::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    display: block;
    clear: both;
    background-color: black;
}
</style>
