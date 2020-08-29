import {turning} from '../../../@turning';

turning.define('/app/primary/teams/default/procedures').test(async ({page}) => {
  await expect(page).toMatchElement('.team-procedures-view');
});

turning
  .define('/app/primary/procedures/team-id/create')
  .test(async ({page}) => {
    await expect(page).toMatchElement('.procedure-editor-view.create-mode', {
      timeout: 2000,
    });
  });