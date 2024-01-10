<script>
	import Accordion from "../components/Accordion.svelte";
	import AccordionGroup from "../components/AccordionGroup.svelte";
	import Avatar from "../components/Avatar.svelte";
	import Background from "../components/Background.svelte";
	import Button from "../components/Button.svelte";
	import Header from "../components/Header.svelte";
	import Hyperlink from "../components/Hyperlink.svelte";
	import Icon from "../components/Icon.svelte";
	import Table from "../components/Table.svelte";
	import Radio from "../components/Radio.svelte";
	import Skeleton from "../components/Skeleton.svelte";
	import BackToTop from "../components/BackToTop.svelte";
	import Badge from "../components/Badge.svelte";
	import Banner from "../components/Banner.svelte";
	import AlaskaLogo from "../components/AlaskaLogo.svelte";

	const basicTableData = {
		headers: JSON.stringify(["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]),
		data: JSON.stringify([
			{"": "Dance class", "Monday": "5:00pm","Wednesday": "5:00pm" },
			{"": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
			{"": "Team meeting", "Wednesday": "10:00am" },
			{"": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
		])
	};
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
				<Icon customColor category="in-flight" name="wifi"></Icon>
			</Button>
			<Button variant="secondary" ariaLabel="arrow-left">
				Previous action
				<Icon customColor category="interface" name="arrow-left"></Icon>
			</Button>
			<Button variant="tertiary" ariaLabel="heart-filled">
				Love this ...
				<Icon customColor category="interface" name="heart-filled"></Icon>
			</Button>
			
		</div>
	</section>

	<section class="component-container">
		<h2 id="auro-hyperlink">Auro Hyperlink</h2>
		<div class="exampleWrapper">
			This is
			<Hyperlink href="https://www.alaskaair.com">
				This is Auro Hyperlink
			</Hyperlink>.
		</div>
	</section>

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

	<section class="component-container">
		<h2 id="auro-avatar">Auro Avatar</h2>
		<div class="exampleWrapper">
			<Avatar></Avatar>
		</div>
	</section>

	<section class="component-container">
		<h2 id="auro-background">Auro Background</h2>
		<div class="exampleWrapper">
			<Background bg="url('https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/ad2') center center/cover no-repeat">
				<div
					style="
						color: var(--ds-color-text-primary-default);
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
					"
				>
					<Header level="2" display="600">View all destinations</Header>
					<Hyperlink cta href="#">See where we fly</Hyperlink>
				</div>
			</Background>
		</div>
	</section>

	<section class="component-container">
		<h2 id="auro-backtotop">Auro BackToTop</h2>
		<div class="exampleWrapper">
			<BackToTop
				ariaLabel="arrow-up"
				rounded>
				Back to top
				<Icon customColor category="interface" name="arrow-up" part="icon"></Icon>
			</BackToTop>
			<BackToTop
				ariaLabel="arrow-up"
				disabled
				rounded>
				Back to top
				<Icon customColor category="interface" name="arrow-up" part="icon"></Icon>
			</BackToTop>
			<BackToTop
				ariaLabel="arrow-up"
				secondary
				rounded>
				Back to top
				<Icon customColor category="interface" name="arrow-up" part="icon"></Icon>
			</BackToTop>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Badge</h2>
		<h4 id="auro-badge-basic">Basic</h4>
		<div class="exampleWrapper">
			<Badge>Nonstop</Badge>
		</div>

		<h4 id="auro-badge-ondark">On Dark</h4>
		<div class="exampleWrapper--ondark">
			<Badge ondark>Nonstop</Badge>
		</div>

		<h4 id="auro-badge-colored">Colored</h4>
		<div class="exampleWrapper">
			<Badge space error>Nonstop</Badge>
			<Badge space success>1 stop</Badge>
			<Badge space advisory>2+ stop</Badge>
		</div>

		<h4 id="auro-badge-colored-ondark">Colored On Dark</h4>
		<div class="exampleWrapper--ondark">
			<Badge ondark space error>Nonstop</Badge>
			<Badge ondark space success>1 stop</Badge>
			<Badge ondark space advisory>2+ stop</Badge>
		</div>

		<h4 id="auro-badge-pill">Pill</h4>
		<div class="exampleWrapper">
			<Badge space pill>12</Badge>
			<Badge space error pill>Danger</Badge>
			<Badge space success pill>Flight 167</Badge>
			<Badge space advisory pill>99</Badge>
		</div>

		<h4 id="auro-badge-brand">Brand</h4>
		<div class="exampleWrapper">
			<Badge pill emerald><b>one</b>world Emerald</Badge>
			<Badge pill sapphire><b>one</b>world Sapphire</Badge>
			<Badge pill ruby><b>one</b>world Ruby</Badge>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Banner</h2>
		<h4 id="auro-banner-billboard">Billboard</h4>
		<div class="exampleWrapper">
			<Banner billboard>
				<picture slot="displayImage">
					<source srcset="https://picsum.photos/id/430/1124/800" media="(min-width: 1024px)">
					<source srcset="https://picsum.photos/id/430/1124/1000" media="(min-width: 768px)">
					<source srcset="https://picsum.photos/id/430/736/750" media="(min-width: 736px)">
					<source srcset="https://picsum.photos/id/430/736/1400" media="(min-width: 375px)">
					<source srcset="https://picsum.photos/id/430/320/700" media="(min-width: 320px)">
					<img src="https://picsum.photos/id/430/225/550" alt="" />
				</picture>
				<img
					slot="contentImage"
					src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
					alt="Random insert"/>
				<p slot="description">
					We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
				</p>
				<Hyperlink
					cta
					secondary
					slot="action"
					href="/"
					target="_blank">
					More info
				</Hyperlink>
			</Banner>
		</div>

		<h4 id="auro-banner-billboard-ondark-alignright">Billboard / slim /alignRight / onDark</h4>
		<div class="exampleWrapper--ondark">
			<Banner billboard slim alignRight ondark>
				<picture slot="displayImage">
					<source srcset="https://picsum.photos/id/324/1124/800" media="(min-width: 1024px)">
					<source srcset="https://picsum.photos/id/324/1124/1000" media="(min-width: 768px)">
					<source srcset="https://picsum.photos/id/324/736/750" media="(min-width: 736px)">
					<source srcset="https://picsum.photos/id/324/736/1400" media="(min-width: 375px)">
					<source srcset="https://picsum.photos/id/324/320/700" media="(min-width: 320px)">
					<img src="https://picsum.photos/id/324/225/550" alt="" />
				</picture>
				<AlaskaLogo official ondark style="width: 192px" slot="contentImage"></AlaskaLogo>
				<p slot="description">
					<span style="max-width:320px; margin-left:auto; display:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<Hyperlink
					cta
					ondark
					href="/"
					slot="action"
					target="_blank">
					Learn more
				</Hyperlink>
			</Banner>
		</div>

		<h4 id="auro-banner-billboard-ondark-alignleft">Billboard / slim / alignLeft / onDark</h4>
		<div class="exampleWrapper--ondark">
			<Banner billboard slim alignLeft ondark>
				<picture slot="displayImage">
					<source srcset="https://picsum.photos/id/42/1124/800" media="(min-width: 1024px)">
					<source srcset="https://picsum.photos/id/42/1124/1000" media="(min-width: 768px)">
					<source srcset="https://picsum.photos/id/42/736/750" media="(min-width: 736px)">
					<source srcset="https://picsum.photos/id/42/736/1400" media="(min-width: 375px)">
					<source srcset="https://picsum.photos/id/42/320/700" media="(min-width: 320px)">
					<img src="https://picsum.photos/id/42/225/550" alt="" />
				</picture>
				<span slot="title">Beverages and cocktails</span>
				<p slot="description">
					<span style="max-width: 360px;display: block;">Enjoy soft drinks, fresh Starbucks® coffee – including lattes and cappuccinos, and Teavana® tea while you relax. Or try our famous Bloody Mary.</span>
				</p>
				<Hyperlink
					cta
					secondary
					ondark
					href="/"
					slot="action"
					target="_blank">
					More info
				</Hyperlink>
			</Banner>
			
		</div>

		<h4 id="auro-banner-hero">Hero</h4>
		<div class="exampleWrapper">
			<Banner hero>
				<picture slot="displayImage">
					<source srcset="https://picsum.photos/id/369/2048/2000" media="(min-width: 1024px)">
					<source srcset="https://picsum.photos/id/369/736/1400" media="(min-width:660px)">
					<img src="https://picsum.photos/id/369/660/420" alt="">
				</picture>
				<span slot="prefix">Duis aute irure dolor</span>
				<span slot="title">Duis aute irure dolor.<br>Excepteur sint occaecat.</span>
				<p slot="description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<Hyperlink
					cta
					secondary
					href="/"
					slot="action"
					target="_blank">
					More info
				</Hyperlink>
			</Banner>
		</div>

		<h4 id="auro-banner-iconic">Iconic</h4>
		<div class="exampleWrapper">
			<Banner iconic iconbg="var(--auro-color-brand-neutral-400)">
				<picture slot="displayImage">
					<source srcset="https://picsum.photos/id/452/2800/2000.jpg" media="(min-width: 1054px)">
					<source srcset="https://picsum.photos/id/452/1500/2000" media="(min-width:660px)">
					<img src="https://picsum.photos/id/452/2800/2000.jpg" alt="">
				</picture>
				<span slot="icon">
					<Icon category="social" name="instagram" customSize customColor style="color: var(--ds-color-base-white); width: 5rem"></Icon>
				</span>
				<span slot="title">
					<Header level="2" display="800" margin="both" size="none">Lorem ipsum title</Header>
					<Header level="3" display="300" margin="top" size="none">You can add multiple auro-header's here</Header>
				</span>
				<p slot="description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
				</p>
			</Banner>
		</div>

		<h4 id="auro-banner-marquee">Marquee</h4>
		<div class="exampleWrapper">
			<Banner marquee>
				<picture slot="displayImage">
					<source srcset="https://picsum.photos/id/154/2048/2000" media="(min-width: 1024px)">
					<source srcset="https://picsum.photos/id/154/736/1400" media="(min-width:660px)">
					<img src="https://picsum.photos/id/154/660/420" alt="">
				</picture>
				<span slot="prefix">Duis aute irure dolor</span>
				<span slot="title">Duis aute irure dolor.<br>Excepteur sint occaecat.</span>
				<p slot="description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<Hyperlink
					cta
					secondary
					href="/"
					slot="action"
					target="_blank">
					More info
				</Hyperlink>
			</Banner>
		</div>

		<h4 id="auro-banner-marquee-solid">Marquee / solid</h4>
		<div class="exampleWrapper">
			<Banner marquee solid>
				<picture slot="displayImage">
					<source srcset="https://picsum.photos/id/1015/1048/2000" media="(min-width: 1024px)">
					<source srcset="https://picsum.photos/id/1015/736/1400" media="(min-width:660px)">
					<img src="https://picsum.photos/id/1015/660/660" alt="">
				</picture>
				<AlaskaLogo official ondark style="width: 192px" slot="contentImage"></AlaskaLogo>
				<p slot="description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<Hyperlink
					cta
					ondark
					href="/"
					slot="action"
					target="_blank">
					More info
				</Hyperlink>
			</Banner>
		</div>

		<h4 id="auro-banner-rounded-border">RoundedBorder</h4>
		<div class="exampleWrapper">
			<Banner roundedBorder alignLeft>
				<img src="https://sitecore-prod-cd-westcentralus.azurewebsites.net/-/media/Images/photos-infographics/credit-card/visa_signature" alt="" slot="contentImage" />
				<span slot="prefix">Prefix - Limited Time</span>
				<span slot="title">Title - Irure dolor.</span>
				<p slot="description">
					Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
				<div slot="disclaimer">
					* Disclaimer - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</div>
				<Hyperlink
					cta
					secondary
					href="/"
					slot="action"
					target="_blank">
					More info
				</Hyperlink>
			</Banner>
		</div>
		
	</section>

	<section class="component-container">
		<h2>Auro Radio</h2>
		<h4 id="auro-radio-default">Radio Default</h4>
		<div class="exampleWrapper">
			<Radio id="radio1" label="Yes" name="radioDemo" value="yes"></Radio>
		</div>

		<h4 id="auro-radio-default-group">Radio Default Group</h4>
		<div class="exampleWrapper">
			<auro-radio-group>
				<span slot="legend">Form label goes here</span>
				<Radio id="radio28" label="Yes" name="radioDemo" value="yes"></Radio>
				<Radio id="radio29" label="No" name="radioDemo" value="no"></Radio>
				<Radio id="radio30" label="Maybe" name="radioDemo" value="maybe"></Radio>
			</auro-radio-group>
		</div>

		<h4 id="auro-radio-disabled-group">Radio Disabled Group</h4>
		<div class="exampleWrapper">
			<auro-radio-group disabled>
				<span slot="legend">Form label goes here</span>
				<Radio id="radio13" label="Yes" name="radioDemo" value="yes"></Radio>
				<Radio id="radio14" label="No" name="radioDemo" value="no"></Radio>
				<Radio id="radio15" label="Maybe" name="radioDemo" value="maybe"></Radio>
			</auro-radio-group>
		</div>

		<h4 id="auro-radio-disabled-single">Radio Disabled Single</h4>
		<div class="exampleWrapper">
			<auro-radio-group>
				<span slot="legend">Form label goes here</span>
				<Radio id="radio10" label="Yes" name="radioDemo" value="yes"></Radio>
				<Radio id="radio11" label="No" name="radioDemo" value="no" disabled></Radio>
				<Radio id="radio12" label="Maybe" name="radioDemo" value="maybe"></Radio>
			</auro-radio-group>
		</div>

		<h4 id="auro-radio-error">Radio Error</h4>
		<div class="exampleWrapper">
			<auro-radio-group error="There is an error with this form entry">
				<span slot="legend">Form label goes here</span>
				<Radio id="radio19" label="Yes" name="radioDemo" value="yes"></Radio>
				<Radio id="radio20" label="No" name="radioDemo" value="no"></Radio>
				<Radio id="radio21" label="Maybe" name="radioDemo" value="maybe"></Radio>
			</auro-radio-group>
		</div>

		<h4 id="auro-radio-horizontal-group">Radio Horizontal Group</h4>
		<div class="exampleWrapper">
			<auro-radio-group horizontal>
				<span slot="legend">Form label goes here</span>
				<Radio id="radio22" label="Yes" name="radioDemo" value="yes"></Radio>
				<Radio id="radio23" label="No" name="radioDemo" value="no"></Radio>
				<Radio id="radio24" label="Maybe" name="radioDemo" value="maybe"></Radio>
			</auro-radio-group>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Skeleton</h2>
		<h4 id="auro-skeleton-circle">Circle</h4>
		<div class="exampleWrapper">
			<Skeleton shape="circle" style="width: 40px; height: 40px"></Skeleton>
			<Skeleton shape="circle" style="width: 100px; height: 100px"></Skeleton>
			<Skeleton shape="circle" style="width: 300px; height: 300px"></Skeleton>
		</div>

		<h4 id="auro-skeleton-oval">Oval</h4>
		<div class="exampleWrapper">
			<Skeleton shape="oval" style="width: 80px; height: 40px"></Skeleton>
			<Skeleton shape="oval" style="width: 200px; height: 100px"></Skeleton>
			<Skeleton shape="oval" style="width: 600px; height: 300px"></Skeleton>
		</div>

		<h4 id="auro-skeleton-rectangle">Rectangle</h4>
		<div class="exampleWrapper">
			<Skeleton shape="rectangle" style="width: 100px; height: 50px"></Skeleton>
			<Skeleton shape="rectangle" style="width: 400px; height: 150px"></Skeleton>
			<Skeleton shape="rectangle" style="width: 800px; height: 300px"></Skeleton>
		</div>

		<h4 id="auro-skeleton-table">Table</h4>
			<div class="exampleWrapper">
				<table class="auro_table">
					<thead>
						<tr>
							<th>The table header</th>
							<th>The table header</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colspan="2">
								<Skeleton shape="oval" style="height: 20px;"></Skeleton>
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<Skeleton shape="oval" style="height: 20px;"></Skeleton>
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<Skeleton shape="oval" style="height: 20px;"></Skeleton>
							</td>
						</tr>
					</tbody>
			</table>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Table</h2>
		<h4 id="auro-table">Basic Table</h4>
		<div class="exampleWrapper">
			<Table nowrap columnHeaders={basicTableData.headers} componentData={basicTableData.data}>
			</Table>
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
