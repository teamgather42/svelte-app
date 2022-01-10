<script lang="ts">
	import { Modal } from '$lib/components/modal';

	let closeModal: boolean = false;
</script>

<Modal
	buttonText="Currency"
	modalTitle="Change currency"
	buttonIcon={['fas', 'euro-sign']}
	iconPosition="left"
	iconSize="sm"
	{closeModal}
/>
