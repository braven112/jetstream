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
	import Input from "../components/Input.svelte";
	import Loader from "../components/Loader.svelte";
	import Lockup from "../components/Lockup.svelte";
	import Menu from "../components/Menu.svelte";
	import Nav from "../components/Nav.svelte";
	import Pane from "../components/Pane.svelte";
	import Popover from "../components/Popover.svelte";
	import Card from "../components/Card.svelte";
	import Carousel from "../components/Carousel.svelte";
	import CheckboxGroup from "../components/CheckboxGroup.svelte";
	import Checkbox from "../components/Checkbox.svelte";

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
			<AccordionGroup emphasis>
				{#each Array(3) as _, index}
					<Accordion key={index}>
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
		<h2>Auro Card</h2>
		<h4 id="auro-card-basic">Basic</h4>
		<div class="exampleWrapper">
			<Card>
				<span slot="title">
					Pri dicat graece abhorreant
				</span>
				<img
					slot="image"
					src="https://picsum.photos/304?random=0"
					alt="Random insert 0"/>
				<p slot="description">
					Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
				</p>
				<Hyperlink
					nav
					href="/"
					slot="action"
					target="_blank">
					More info
				</Hyperlink>
				<p slot="disclaimer">
					* Errem tempor eligendi cu eos
				</p>
			</Card>
		</div>

		<h4 id="auro-card-align-left">Align Left</h4>
		<div class="exampleWrapper">
			<Card alignLeft>
				<span slot="title">
					Pri dicat graece abhorreant
				</span>
				<img
					slot="image"
					src="https://picsum.photos/304?random=1"
					alt="Random insert 0"/>
				<p slot="description">
					Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
				</p>
				<Hyperlink
					nav
					href="/"
					slot="action"
					target="_blank">
					More info
				</Hyperlink>
				<p slot="disclaimer">
					* Errem tempor eligendi cu eos
				</p>
			</Card>
		</div>

		<h4 id="auro-card-multi-option-layout">Multi-option layout</h4>
		<div class="exampleWrapper">
			<div style="display: flex;justify-content: space-between;">
				<Card>
					<span slot="title">
						Pri dicat graece abhorreant
					</span>
					<img
						slot="image"
						src="https://picsum.photos/304?random=3"
						alt="Random insert 0"/>
					<p slot="description">
						Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
					</p>
					<Hyperlink
						nav
						href="/"
						slot="action"
						target="_blank">
						More info
					</Hyperlink>
					<p slot="disclaimer">
						* Errem tempor eligendi cu eos
					</p>
				</Card>
				
				<Card>
					<span slot="title">
						Pri dicat graece abhorreant
					</span>
					<img
						slot="image"
						src="https://picsum.photos/304?random=4"
						alt="Random insert 0"/>
					<p slot="description">
						Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
					</p>
					<Hyperlink
						nav
						href="/"
						slot="action"
						target="_blank">
						More info
					</Hyperlink>
					<p slot="disclaimer">
						* Errem tempor eligendi cu eos
					</p>
				</Card>
				
				<Card>
					<span slot="title">
						Pri dicat graece abhorreant
					</span>
					<img
						slot="image"
						src="https://picsum.photos/304?random=5"
						alt="Random insert 0"/>
					<p slot="description">
						Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
					</p>
					<Hyperlink
						nav
						href="/"
						slot="action"
						target="_blank">
						More info
					</Hyperlink>
					<p slot="disclaimer">
						* Errem tempor eligendi cu eos
					</p>
				</Card>
			</div>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Carousel</h2>
		<h4 id="auro-carousel-basic">Basic</h4>
		<div class="exampleWrapper">
			<Carousel>
				<Pane date="2020-10-10" price="$435"></Pane>
				<Pane date="2020-10-11" price="$435"></Pane>
				<Pane date="2020-10-12" price="$435"></Pane>
				<Pane date="2020-10-13" selected price="$666"></Pane>
				<Pane date="2020-10-14" price="$435" disabled></Pane>
				<Pane date="2020-10-15" price="$435"></Pane>
				<Pane date="2020-10-16" price="$435"></Pane>
				<Pane date="2020-10-17" price="$435"></Pane>
				<Pane date="2020-10-18" price="$435"></Pane>
				<Pane date="2020-10-19" price="$435"></Pane>
				<Pane date="2020-10-20" price="$435"></Pane>
				<Pane date="2020-10-21" price="$435"></Pane>
				<Pane date="2020-10-22" price="$435"></Pane>
				<Pane date="2020-10-23" price="$435"></Pane>
				<Pane date="2020-10-24" price="$435"></Pane>
			</Carousel>
		</div>

		<h4 id="auro-carousel-image-custom">Carousel of images w/custom scroll distance</h4>
		<div class="exampleWrapper">
			<Carousel label="Images" scrolldistance="600">
				<img src="https://picsum.photos/200?random=0" alt="Random insert 0">
				<img src="https://picsum.photos/200?random=1" alt="Random insert 1">
				<img src="https://picsum.photos/200?random=2" alt="Random insert 2">
				<img src="https://picsum.photos/200?random=3" alt="Random insert 3">
				<img src="https://picsum.photos/200?random=4" alt="Random insert 4">
				<img src="https://picsum.photos/200?random=5" alt="Random insert 5">
				<img src="https://picsum.photos/200?random=6" alt="Random insert 6">
				<img src="https://picsum.photos/200?random=7" alt="Random insert 7">
				<img src="https://picsum.photos/200?random=8" alt="Random insert 8">
				<img src="https://picsum.photos/200?random=9" alt="Random insert 9">
				<img src="https://picsum.photos/200?random=10" alt="Random insert 10">
				<img src="https://picsum.photos/200?random=11" alt="Random insert 11">
				<img src="https://picsum.photos/200?random=12" alt="Random insert 12">
				<img src="https://picsum.photos/200?random=13" alt="Random insert 13">
				<img src="https://picsum.photos/200?random=14" alt="Random insert 14">
				<img src="https://picsum.photos/200?random=15" alt="Random insert 15">
				<img src="https://picsum.photos/200?random=16" alt="Random insert 16">
				<img src="https://picsum.photos/200?random=17" alt="Random insert 17">
				<img src="https://picsum.photos/200?random=18" alt="Random insert 18">
				<img src="https://picsum.photos/200?random=19" alt="Random insert 19">
				<img src="https://picsum.photos/200?random=20" alt="Random insert 20">
				<img src="https://picsum.photos/200?random=21" alt="Random insert 21">
				<img src="https://picsum.photos/200?random=22" alt="Random insert 22">
				<img src="https://picsum.photos/200?random=23" alt="Random insert 23">
				<img src="https://picsum.photos/200?random=24" alt="Random insert 24">
				<img src="https://picsum.photos/200?random=25" alt="Random insert 25">
				<img src="https://picsum.photos/200?random=26" alt="Random insert 26">
				<img src="https://picsum.photos/200?random=27" alt="Random insert 27">
				<img src="https://picsum.photos/200?random=28" alt="Random insert 28">
				<img src="https://picsum.photos/200?random=29" alt="Random insert 29">
				<img src="https://picsum.photos/200?random=30" alt="Random insert 30">
				<img src="https://picsum.photos/200?random=31" alt="Random insert 31">
				<img src="https://picsum.photos/200?random=32" alt="Random insert 32">
				<img src="https://picsum.photos/200?random=33" alt="Random insert 33">
				<img src="https://picsum.photos/200?random=34" alt="Random insert 34">
				<img src="https://picsum.photos/200?random=35" alt="Random insert 35">
				<img src="https://picsum.photos/200?random=36" alt="Random insert 36">
				<img src="https://picsum.photos/200?random=37" alt="Random insert 37">
				<img src="https://picsum.photos/200?random=38" alt="Random insert 38">
				<img src="https://picsum.photos/200?random=39" alt="Random insert 39">
				<img src="https://picsum.photos/200?random=40" alt="Random insert 40">
				<img src="https://picsum.photos/200?random=41" alt="Random insert 41">
				<img src="https://picsum.photos/200?random=42" alt="Random insert 42">
				<img src="https://picsum.photos/200?random=43" alt="Random insert 43">
				<img src="https://picsum.photos/200?random=44" alt="Random insert 44">
				<img src="https://picsum.photos/200?random=45" alt="Random insert 45">
				<img src="https://picsum.photos/200?random=46" alt="Random insert 46">
				<img src="https://picsum.photos/200?random=47" alt="Random insert 47">
				<img src="https://picsum.photos/200?random=48" alt="Random insert 48">
				<img src="https://picsum.photos/200?random=49" alt="Random insert 49">
				<img src="https://picsum.photos/200?random=50" alt="Random insert 50">
				<img src="https://picsum.photos/200?random=51" alt="Random insert 51">
				<img src="https://picsum.photos/200?random=52" alt="Random insert 52">
				<img src="https://picsum.photos/200?random=53" alt="Random insert 53">
				<img src="https://picsum.photos/200?random=54" alt="Random insert 54">
				<img src="https://picsum.photos/200?random=55" alt="Random insert 55">
				<img src="https://picsum.photos/200?random=56" alt="Random insert 56">
				<img src="https://picsum.photos/200?random=57" alt="Random insert 57">
				<img src="https://picsum.photos/200?random=58" alt="Random insert 58">
				<img src="https://picsum.photos/200?random=59" alt="Random insert 59">
				<img src="https://picsum.photos/200?random=60" alt="Random insert 60">
				<img src="https://picsum.photos/200?random=61" alt="Random insert 61">
				<img src="https://picsum.photos/200?random=62" alt="Random insert 62">
				<img src="https://picsum.photos/200?random=63" alt="Random insert 63">
				<img src="https://picsum.photos/200?random=64" alt="Random insert 64">
				<img src="https://picsum.photos/200?random=65" alt="Random insert 65">
				<img src="https://picsum.photos/200?random=66" alt="Random insert 66">
				<img src="https://picsum.photos/200?random=67" alt="Random insert 67">
				<img src="https://picsum.photos/200?random=68" alt="Random insert 68">
				<img src="https://picsum.photos/200?random=69" alt="Random insert 69">
				<img src="https://picsum.photos/200?random=70" alt="Random insert 70">
				<img src="https://picsum.photos/200?random=71" alt="Random insert 71">
				<img src="https://picsum.photos/200?random=72" alt="Random insert 72">
				<img src="https://picsum.photos/200?random=73" alt="Random insert 73">
				<img src="https://picsum.photos/200?random=74" alt="Random insert 74">
				<img src="https://picsum.photos/200?random=75" alt="Random insert 75">
				<img src="https://picsum.photos/200?random=76" alt="Random insert 76">
				<img src="https://picsum.photos/200?random=77" alt="Random insert 77">
				<img src="https://picsum.photos/200?random=78" alt="Random insert 78">
				<img src="https://picsum.photos/200?random=79" alt="Random insert 79">
				<img src="https://picsum.photos/200?random=80" alt="Random insert 80">
				<img src="https://picsum.photos/200?random=81" alt="Random insert 81">
				<img src="https://picsum.photos/200?random=82" alt="Random insert 82">
				<img src="https://picsum.photos/200?random=83" alt="Random insert 83">
				<img src="https://picsum.photos/200?random=84" alt="Random insert 84">
				<img src="https://picsum.photos/200?random=85" alt="Random insert 85">
				<img src="https://picsum.photos/200?random=86" alt="Random insert 86">
				<img src="https://picsum.photos/200?random=87" alt="Random insert 87">
				<img src="https://picsum.photos/200?random=88" alt="Random insert 88">
				<img src="https://picsum.photos/200?random=89" alt="Random insert 89">
				<img src="https://picsum.photos/200?random=90" alt="Random insert 90">
				<img src="https://picsum.photos/200?random=91" alt="Random insert 91">
				<img src="https://picsum.photos/200?random=92" alt="Random insert 92">
				<img src="https://picsum.photos/200?random=93" alt="Random insert 93">
				<img src="https://picsum.photos/200?random=94" alt="Random insert 94">
				<img src="https://picsum.photos/200?random=95" alt="Random insert 95">
				<img src="https://picsum.photos/200?random=96" alt="Random insert 96">
				<img src="https://picsum.photos/200?random=97" alt="Random insert 97">
				<img src="https://picsum.photos/200?random=98" alt="Random insert 98">
				<img src="https://picsum.photos/200?random=99" alt="Random insert 99">
			</Carousel>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Checkbox</h2>
		<h4 id="auro-checkbox-basic">Basic</h4>
		<div class="exampleWrapper">
			<CheckboxGroup>
				<span slot="legend">Form label goes here</span>
				<Checkbox value="checkbox option" name="example1" id="checkbox-basic1">Checkbox option</Checkbox>
				<Checkbox value="checkbox option" name="example2" id="checkbox-basic2" checked>Checkbox option</Checkbox>
				<Checkbox value="checkbox option" name="example3" id="checkbox-basic3">Checkbox option</Checkbox>
				<Checkbox value="checkbox option" name="example4" id="checkbox-basic4">Checkbox option</Checkbox>
			</CheckboxGroup>
		</div>

		<h4 id="auro-checkbox-disabled">Disabled</h4>
		<div class="exampleWrapper">
			<CheckboxGroup disabled>
				<span slot="legend">Form label goes here</span>
				<Checkbox value="disabled checkbox option" name="example1" id="checkbox-disabledGroup1">Disabled checkbox option</Checkbox>
				<Checkbox value="disabled checkbox option" name="example2" id="checkbox-disabledGroup2" checked>Disabled checkbox option</Checkbox>
				<Checkbox value="disabled checkbox option" name="example3" id="checkbox-disabledGroup3">Disabled checkbox option</Checkbox>
				<Checkbox value="disabled checkbox option" name="example4" id="checkbox-disabledGroup4">Disabled checkbox option</Checkbox>
			</CheckboxGroup>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Input</h2>
		<h4 id="auro-input-default">Default Input</h4>
		<div class="exampleWrapper exampleWrapper--flex">
			<Input id="demo1" style="width: 45%"></Input>
			<Input id="demo2" style="width: 45%" bordered></Input>
		</div>

		<h4 id="auro-input-label">Label Input</h4>
		<div class="exampleWrapper exampleWrapper--flex">
			<Input id="demo3" style="width: 45%">
				<span slot="label">Name</span>
			</Input>
			<Input id="demo4" bordered style="width: 45%">
				<span slot="label">Name</span>
				<span slot="helptext">Please enter your full name.</span>
			</Input>
		</div>

		<h4 id="auro-input-dateMax">Date Max Input</h4>
		<div class="exampleWrapper">
			<Input id="demoMaxDate" style="width: 45%" type="month-day-year" max="03/25/2023" setCustomValidityRangeOverflow="The selected date is past the defined maximum date.">
				<span slot="label">Choose a date</span>
			</Input>
		</div>

		<h4 id="uro-input-dateMin">Date Min Input</h4>
		<div class="exampleWrapper">
			<Input id="demoMinDate" style="width: 45%" type="month-day-year" min="03/25/2023" setCustomValidityRangeUnderflow="The selected date is before the defined minimum date.">
				<span slot="label">Choose a date</span>
			</Input>
		</div>

		<h4 id="auro-input-borderless">Borderless Input</h4>
		<div class="exampleWrapper">
			<Input id="demoBorderless" borderless style="width: 45%">
				<span slot="label">Name</span>
				<span slot="helptext">Please enter your full name.</span>
			</Input>
		</div>

		<h4 id="auro-input-numberMax">Number Max Input</h4>
		<div class="exampleWrapper">
			<Input id="demoMaxNumber" style="width: 45%" type="numeric" max="10" setCustomValidityRangeOverflow="The selected value is above the defined maximum.">
				<span slot="label">Choose a number</span>
			</Input>
		</div>

		<h4 id="auro-input-numberMin">Number Min Input</h4>
		<div class="exampleWrapper">
			<Input id="demoMinNumber" style="width: 45%" type="numeric" min="10" setCustomValidityRangeUnderflow="The selected value is below the defined minimum.">
				<span slot="label">Choose a number</span>
			</Input>
		</div>

		<h4 id="auro-input-pattern">Pattern Input</h4>
		<div class="exampleWrapper exampleWrapper--flex">
			<Input id="demo5" style="width: 45%" pattern={String('[a-z]{1,15}')} spellcheck="false" setCustomValidityBadInput="Only contain lowercase letters w/no spaces">
				<span slot="label">Username</span>
				<span slot="helptext">Please enter a username.</span>
			</Input>
			<Input id="demo6" style="width: 45%" bordered pattern={String('[a-z]{1,15}')} spellcheck="false" setCustomValidityBadInput="Only contain lowercase letters w/no spaces">
				<span slot="label">Username</span>
				<span slot="helptext">Please enter a username.</span>
			</Input>
		</div>

		<h4 id="auro-input-placeholder">Placeholder Input</h4>
		<div class="exampleWrapper exampleWrapper--flex">
			<Input id="demo50" style="width: 45%" required placeholder="John Doe">
				<span slot="label">Full name</span>
			</Input>
			<Input id="demo51" style="width: 45%" required bordered placeholder="John Doe">
				<span slot="label">Full name</span>
				<span slot="helptext">Please enter your full name.</span>
			</Input>
		</div>

		<h4 id="auro-input-required">Required Input</h4>
		<div class="exampleWrapper exampleWrapper--flex">
			<Input id="demo5" style="width: 45%" required>
				<span slot="label">Name</span>
			</Input>
			<Input id="demo6" style="width: 45%" required bordered>
				<span slot="label">Name</span>
				<span slot="helptext">Please enter your full name.</span>
			</Input>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Loader</h2>
		<h4 id="auro-loader-gallery">Loader Gallery</h4>
		<div class="exampleWrapper">
			<Loader ringworm md></Loader >
			<Loader orbit md></Loader >
			<Loader pulse md></Loader >
			<Loader laser></Loader >
		</div>

		<h4 id="auro-loader-sizes">Loader Size</h4>
		<div class="exampleWrapper">
			<Loader ringworm></Loader >
			<Loader ringworm sm></Loader >
			<Loader ringworm md></Loader >
			<Loader ringworm lg></Loader >
			<Loader ringworm xl></Loader >
		</div>

		<h4 id="auro-loader-color">Loader Color</h4>
		<div class="exampleWrapper">
			<Loader pulse onlight md></Loader >
		</div>

		<h4 id="auro-loader-color-onDark">Loader onDark</h4>
		<div class="exampleWrapper--ondark">
			<Loader pulse ondark sm></Loader >
			<Loader pulse white sm></Loader >
		</div>

		<h4 id="auro-loader-custom">Loader Custom</h4>
		<div class="exampleWrapper">
			<Loader style="color: pink" ringworm md></Loader >
		</div>

		<h4 id="auro-loader-custom-animation">Loader Animation</h4>
		<div class="exampleWrapper">
			<Loader style="animation-duration: 8s" ondark orbit lg></Loader >
			<Loader style="animation-duration: 1s" white orbit xl></Loader >
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Lockup</h2>
		<h4 id="auro-lockup-default">Default</h4>
		<div class="exampleWrapper">
			<Lockup>
				<span slot="title">Place title text here</span>
				<span slot="subtitle">Place subtitle text here</span>
			</Lockup>
		</div>

		<h4 id="auro-lockup-onDark">Ondark</h4>
		<div class="exampleWrapper--ondark">
			<Lockup ondark>
				<span slot="title">Product Name</span>
				<span slot="subtitle">Powered by Partner Name</span>
			</Lockup>
			<Lockup ondark oneworld></Lockup>
		</div>

		<h4 id="auro-lockup-one-logo">With One Logo</h4>
		<div class="exampleWrapper">
			<Lockup oneworld></Lockup>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Menu</h2>
		<h4 id="auro-menu-default">Default</h4>
		<div class="exampleWrapper">
			<Menu>
				<auro-menuoption value="stops">Stops</auro-menuoption>
				<auro-menuoption value="price">Price</auro-menuoption>
				<auro-menuoption value="duration">Duration</auro-menuoption>
				<auro-menuoption value="departure">Departure</auro-menuoption>
				<auro-menuoption value="arrival">Arrival</auro-menuoption>
			</Menu>
		</div>

		<h4 id="auro-menu-disabled">Disabled</h4>
		<div class="exampleWrapper--ondark">
			<Menu disabled>
				<auro-menuoption value="new tab">New tab</auro-menuoption>
				<auro-menuoption value="new window">New window</auro-menuoption>
				<auro-menuoption value="open file">Open file</auro-menuoption>
				<auro-menuoption value="open location">Open location</auro-menuoption>
				<hr>
				<auro-menuoption value="close window">Close window</auro-menuoption>
				<auro-menuoption value="close tab">Close tab</auro-menuoption>
				<auro-menuoption value="save page as...">Save page as...</auro-menuoption>
				<hr>
				<auro-menuoption value="share">Share</auro-menuoption>
				<hr>
				<auro-menuoption value="print">Print</auro-menuoption>
			</Menu>
		</div>

		<h4 id="auro-menu-scroll">Scroll</h4>
		<div class="exampleWrapper">
			<Menu id="alpha" style="max-height: 200px">
				<auro-menuoption value="stops">Stops</auro-menuoption>
				<auro-menuoption value="price">Price</auro-menuoption>
				<auro-menuoption value="duration">Duration</auro-menuoption>
				<hr>
				<Menu id="beta">
					<auro-menuoption value="apples">Apples</auro-menuoption>
					<auro-menuoption value="oranges">Oranges</auro-menuoption>
					<auro-menuoption value="pears">Pears</auro-menuoption>
					<auro-menuoption value="grapes">Grapes</auro-menuoption>
					<auro-menuoption value="kiwi">Kiwi</auro-menuoption>
					<hr>
					<Menu id="charlie">
						<auro-menuoption value="person">Person</auro-menuoption>
						<auro-menuoption value="woman">Woman</auro-menuoption>
						<auro-menuoption value="man">Man</auro-menuoption>
						<auro-menuoption value="camera">Camera</auro-menuoption>
						<auro-menuoption value="tv">TV</auro-menuoption>
					</Menu>
				</Menu>
				<hr>
				<auro-menuoption value="departure">Departure</auro-menuoption>
				<auro-menuoption value="arrival">Arrival</auro-menuoption>
				<hr>
				<Menu id="delta">
					<auro-menuoption value="cars">Cars</auro-menuoption>
					<auro-menuoption value="trucks">Trucks</auro-menuoption>
					<auro-menuoption value="boats">Boats</auro-menuoption>
					<auro-menuoption value="planes">Planes</auro-menuoption>
					<auro-menuoption value="motorcycles">Motorcycles</auro-menuoption>
				</Menu>
			</Menu>
		</div>

		<h4 id="auro-menu-match-word">Match Word</h4>
		<div class="exampleWrapper">
			<Input id="matchWordInput" onChange="auroMenuMatchWordExample()" keyup="auroMenuMatchWordExample()" required>
				<span slot="label">Enter a value to match in the menu</span>
			</Input>
			<br />
			<Menu id="matchWordMenu">
				<auro-menuoption value="stops">Stops</auro-menuoption>
				<auro-menuoption value="price">Price</auro-menuoption>
				<auro-menuoption value="duration">Duration</auro-menuoption>
				<auro-menuoption value="departure">Departure</auro-menuoption>
				<auro-menu>
				<auro-menuoption value="apples">Apples</auro-menuoption>
				<auro-menuoption value="oranges">Oranges</auro-menuoption>
				<auro-menuoption value="peaches">Peaches</auro-menuoption>
				</auro-menu>
				<auro-menuoption value="arrival">Arrival</auro-menuoption>
			</Menu>
		</div>

		<h4 id="auro-menu-nested">Nested Menu</h4>
		<div class="exampleWrapper">
			<Menu id="alpha">
				<auro-menuoption value="stops">Stops</auro-menuoption>
				<auro-menuoption value="price">Price</auro-menuoption>
				<auro-menuoption value="duration">Duration</auro-menuoption>
				<hr>
				<Menu id="beta">
					<auro-menuoption value="apples">Apples</auro-menuoption>
					<auro-menuoption value="oranges">Oranges</auro-menuoption>
					<auro-menuoption value="pears">Pears</auro-menuoption>
					<auro-menuoption value="grapes">Grapes</auro-menuoption>
					<auro-menuoption value="kiwi">Kiwi</auro-menuoption>
					<hr>
					<Menu id="charlie">
						<auro-menuoption value="person">Person</auro-menuoption>
						<auro-menuoption value="woman">Woman</auro-menuoption>
						<auro-menuoption value="man">Man</auro-menuoption>
						<auro-menuoption value="camera">Camera</auro-menuoption>
						<auro-menuoption value="tv">TV</auro-menuoption>
					</Menu>
				</Menu>
				<hr>
				<auro-menuoption value="departure">Departure</auro-menuoption>
				<auro-menuoption value="arrival">Arrival</auro-menuoption>
				<hr>
				<Menu id="delta">
					<auro-menuoption value="cars">Cars</auro-menuoption>
					<auro-menuoption value="trucks">Trucks</auro-menuoption>
					<auro-menuoption value="boats">Boats</auro-menuoption>
					<auro-menuoption value="planes">Planes</auro-menuoption>
					<auro-menuoption value="motorcycles">Motorcycles</auro-menuoption>
				</Menu>
			</Menu>
		</div>

		<h4 id="auro-menu-noCheckmark">No Checkmark</h4>
		<div class="exampleWrapper">
			<Menu nocheckmark>
				<auro-menuoption value="stops">Stops</auro-menuoption>
				<auro-menuoption value="price">Price</auro-menuoption>
				<auro-menuoption value="duration">Duration</auro-menuoption>
				<hr>
				<Menu>
					<auro-menuoption value="apples">Apples</auro-menuoption>
					<auro-menuoption value="oranges">Oranges</auro-menuoption>
					<auro-menuoption value="pears">Pears</auro-menuoption>
					<auro-menuoption value="grapes">Grapes</auro-menuoption>
					<auro-menuoption value="kiwi">Kiwi</auro-menuoption>
					<hr>
					<Menu>
						<auro-menuoption value="person">Person</auro-menuoption>
						<auro-menuoption value="woman">Woman</auro-menuoption>
						<auro-menuoption value="man">Man</auro-menuoption>
						<auro-menuoption value="camera">Camera</auro-menuoption>
						<auro-menuoption value="tv">TV</auro-menuoption>
					</Menu>
				</Menu>
				<hr>
				<auro-menuoption value="departure">Departure</auro-menuoption>
				<auro-menuoption value="arrival">Arrival</auro-menuoption>
				<hr>
				<Menu>
					<auro-menuoption value="cars">Cars</auro-menuoption>
					<auro-menuoption value="trucks">Trucks</auro-menuoption>
					<auro-menuoption value="boats">Boats</auro-menuoption>
					<auro-menuoption value="planes">Planes</auro-menuoption>
					<auro-menuoption value="motorcycles">Motorcycles</auro-menuoption>
				</Menu>
			</Menu>
		</div>

		<h4 id="auro-menu-preSelected">Preselected Option</h4>
		<div class="exampleWrapper">
			<Menu>
				<auro-menuoption value="new tab">New tab</auro-menuoption>
				<auro-menuoption value="new window" selected>New window</auro-menuoption>
				<auro-menuoption value="open file">Open file</auro-menuoption>
				<auro-menuoption value="open location">Open location</auro-menuoption>
				<hr>
				<auro-menuoption value="close window">Close window</auro-menuoption>
				<auro-menuoption value="close tab" disabled>Close tab</auro-menuoption>
				<auro-menuoption value="save page as...">Save page as...</auro-menuoption>
				<hr>
				<auro-menuoption value="share" disabled>Share</auro-menuoption>
				<hr>
				<auro-menuoption value="print">Print</auro-menuoption>
			</Menu>
		</div>

		<h4 id="menu-restricted-long-option">Restricted long option</h4>
		<div class="exampleWrapper">
			<Menu style="width: 300px">
				<auro-menuoption value="new tab">New tab</auro-menuoption>
				<auro-menuoption value="new window">New window</auro-menuoption>
				<auro-menuoption value="open file">Open file</auro-menuoption>
				<auro-menuoption value="open location">Open location</auro-menuoption>
				<hr>
				<auro-menuoption value="close window">Close window</auro-menuoption>
				<auro-menuoption value="close tab">Close tab</auro-menuoption>
				<auro-menuoption value="save page as...">Save page as 'option_10_redevelopment_hover_scenario.png'</auro-menuoption>
				<hr>
				<auro-menuoption value="share">Share</auro-menuoption>
				<hr>
				<auro-menuoption value="print">Print</auro-menuoption>
			</Menu>
		</div>

		<h4 id="auro-menu-with-disabled-state">With Disabled State</h4>
		<div class="exampleWrapper">
			<Menu>
				<auro-menuoption value="new tab">New tab</auro-menuoption>
				<auro-menuoption value="new window">New window</auro-menuoption>
				<auro-menuoption value="open file">Open file</auro-menuoption>
				<auro-menuoption value="open location">Open location</auro-menuoption>
				<hr>
				<auro-menuoption value="close window">Close window</auro-menuoption>
				<auro-menuoption value="close tab" disabled>Close tab</auro-menuoption>
				<auro-menuoption value="save page as...">Save page as...</auro-menuoption>
				<hr>
				<auro-menuoption value="share" disabled>Share</auro-menuoption>
				<hr>
				<auro-menuoption value="print">Print</auro-menuoption>
			</Menu>
		</div>

		<h4 id="auro-menu-horizontal-separator">Horizontal Separator</h4>
		<div class="exampleWrapper">
			<Menu>
				<auro-menuoption value="new tab">New tab</auro-menuoption>
				<auro-menuoption value="new window">New window</auro-menuoption>
				<auro-menuoption value="open file">Open file</auro-menuoption>
				<auro-menuoption value="open location">Open location</auro-menuoption>
				<hr>
				<auro-menuoption value="close window">Close window</auro-menuoption>
				<auro-menuoption value="close tab">Close tab</auro-menuoption>
				<auro-menuoption value="save page as...">Save page as...</auro-menuoption>
				<hr>
				<auro-menuoption value="share">Share</auro-menuoption>
				<hr>
				<auro-menuoption value="print">Print</auro-menuoption>
			</Menu>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Nav</h2>
		<h4 id="auro-nav-basic">Default</h4>
		<div class="exampleWrapper">
			<Nav>
				<auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Home</auro-breadcrumb>
				<auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 2</auro-breadcrumb>
				<auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 3</auro-breadcrumb>
				<auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 4</auro-breadcrumb>
				<auro-breadcrumb>Current</auro-breadcrumb>
			</Nav>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Pane</h2>
		<h4 id="auro-pane-basic">Basic Table</h4>
		<div class="exampleWrapper">
			<Pane date="2020-09-20"></Pane>
			<Pane date="2020-09-21" selected></Pane>
			<Pane date="2020-09-22" disabled></Pane>
		</div>

		<h4 id="auro-pane-date-price">Date and price</h4>
		<div class="exampleWrapper">
			<Pane date="2020-09-20" price="$500"></Pane>
			<Pane date="2020-09-21" price="$501" selected="true"></Pane>
			<Pane date="2020-09-22" price="$480" disabled="true"></Pane>
		</div>

		<h4 id="auro-pane-small">Small Size</h4>
		<div class="exampleWrapper">
			<Pane date="2020-09-20" price="$500" sm></Pane>
			<Pane date="2020-09-21" price="$501" selected="true" sm></Pane>
			<Pane date="2020-09-22" price="$480" disabled="true" sm></Pane>
		</div>
	</section>

	<!-- TODO: UPDATE THIS STORY -->
	<section class="component-container">
		<h2>Auro Popover</h2>
		<h4 id="auro-table">Basic Table</h4>
		<div class="exampleWrapper">
			<Table>
			</Table>
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

	.exampleWrapper--flex {
		display: flex;
		justify-content: space-between;
	}
</style>
