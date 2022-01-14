import { IconsDownloadWrapper } from './iconsDownload'
import { Button } from 'components/ui'
import { AppStore, PlayStore } from 'components/icons'

const IconsDownload = () => {
  return (
    <IconsDownloadWrapper>
      <Button to='/' target="_blank" shape="circle">
        <AppStore />
      </Button>
      <Button to='/' target="_blank" shape="circle">
        <PlayStore />
      </Button>
  </IconsDownloadWrapper>
  )
}

export default IconsDownload
