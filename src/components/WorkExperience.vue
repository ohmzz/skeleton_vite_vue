<template>
	<section
		v-for='item in items'
		style='border: 2px solid #3475ad; gap: 4px;'
	>
		<a
			:href='`https://${item.url}`'
			target='_blank'
		>
			{{ item.company.institution }}
			<p
				v-if='item.company.dependency'
				style='border: 3px solid wheat;'
			>
				{{ item.company.dependency }}
			</p>
		</a>
		<p>{{ item.role }}</p>
		<p v-html='item.tasks'></p>
		<p>{{ item.date.startYear }}</p>
		<p>{{ item.country }}/{{ item.city }}</p>
	</section>
</template>

<script>
import jobs from "@/experience.json"

export  default {
	data() {
		return {
			msg: String,
			items: jobs
		}
	}
}
</script>