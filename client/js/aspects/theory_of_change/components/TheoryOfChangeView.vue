<template>

	<main ref="container" class="app-content light theory-of-change">
		<div class="container grid-xl">
			<h4 class="mb-8 mt-4">{{ $t('aspects.theory_of_change.dashboard.title') }}</h4>

			<div class="columns external-items" v-if="theoryOfChange.length > 0">
				<external-item
					v-for="(item, index) in theoryOfChange"
					:key="index"
					:item="item"
					:projectId="project.id"
					type="toc"
				/>
			</div>

			<div class="empty" v-if="!theoryOfChange.length">
				<p class="empty-title h5">{{ $t('aspects.theory_of_change.dashboard.empty_set') }}</p>
				<div class="empty-action">
					<button class="btn btn-primary" v-show="userCanEdit" @click.prevent="doEdit">{{ $t('aspects.theory_of_change.dashboard.manage') }}</button>
				</div>
			</div>

		</div>
	</main>

</template>

<script>

import { get, commit } from 'vuex-pathify';

import ExternalItem from '@/components/project/view/ExternalItem';

export default {

	name: "TheoryOfChangeView",

	components: {
		ExternalItem
	},

	props: {
		aspectId: [Boolean, String],
	},

	computed: {

		...get([
			'project',
			'userCanEdit',
		]),

		dataPath() {
			return `project@data.${this.aspectId}`;
		},

		aspectData: get(':dataPath'),

		theoryOfChange() {
			if ( ! this.aspectData) {
				return [];
			}
			return this.aspectData.data.items;
		}

	},

	methods: {
		doEdit() {
			commit('EDIT_ASPECT', this.aspectId);
		},
	}

}

</script>
