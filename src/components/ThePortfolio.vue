<template>
	<p>The portfolio</p>
	<img
		class="logo vue"
		src="@/assets/portfolio/adama_mx.png"
		alt=''
	/>
	<ul style='height: 300px; overflow:hidden;'>
		<li
			v-for='(image, idx) in images'
			:key="idx"
		>
			<img
				:alt='image.name'
				:src="`src/assets/portfolio/${image.path}`"
			/>
		</li>
	</ul>
</template>

<script>
import images from '@/images.json'

export default {
	name: 'ThePortfolio',

	data() {
		return {
			msg: String,
			images: [],
		}
	},

	mounted() {
		this.images = images
	},
}
</script>