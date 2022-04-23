<template>
  <div>
    <a @click="exportTableToCSV" class="uk-button uk-button-default uk-button-small">
      Download <i class="fas fa-download"></i>
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup(props) {
    const downloadCSV = (csv: string, filename: string) => {
      // CSV file
      const csvFile = new Blob([csv], { type: 'text/csv' });

      // Download link
      const downloadLink = document.createElement('a');

      // File name
      downloadLink.download = filename;

      // Create a link to the file
      downloadLink.href = window.URL.createObjectURL(csvFile);

      // Hide download link
      downloadLink.style.display = 'none';

      // Add the link to DOM
      document.body.appendChild(downloadLink);

      // Click download link
      downloadLink.click();
    };
    const exportTableToCSV = () => {
      const csv = [];
      const rows = document.querySelectorAll(`table#${props.tableId} tr`);

      for (let i = 0; i < rows.length; i += 1) {
        const row = []; const
          cols = rows[i].querySelectorAll<HTMLTableColElement>('td, th');

        for (let j = 0; j < cols.length; j += 1) row.push(cols[j].innerText);

        csv.push(row.join(','));
      }

      // Download CSV file
      downloadCSV(csv.join('\n'), 'export.csv');
    };
    return {
      exportTableToCSV,
    };
  },
  props: {
    tableId: {
      type: String,
      required: true,
    },
  },
});
</script>
